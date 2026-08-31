"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;
  uniform vec2 uRes;
  uniform float uIntensity;

  vec3 NIGHT  = vec3(0.063, 0.039, 0.122);
  vec3 NAVY   = vec3(0.141, 0.082, 0.267);
  vec3 PURPLE = vec3(0.514, 0.302, 0.984);
  vec3 VIOLET = vec3(0.690, 0.550, 1.000);
  vec3 LAV    = vec3(0.860, 0.830, 0.970);

  vec2 hash22(vec2 p){
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(dot(hash22(i), f), dot(hash22(i + vec2(1,0)), f - vec2(1,0)), u.x),
               mix(dot(hash22(i + vec2(0,1)), f - vec2(0,1)), dot(hash22(i + vec2(1,1)), f - vec2(1,1)), u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++){ v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 p = uv; p.x *= aspect;
    vec2 m = uMouse; m.x *= aspect;
    float t = uTime * 0.05;
    // Deliberately restrained — a quiet field rather than a dense nebula.
    float intensity = uIntensity * (0.4 + uScroll * 0.35);

    // domain-warped fbm field
    vec2 q = vec2(fbm(p * 1.4 + t), fbm(p * 1.4 + vec2(5.2, 1.3) - t));
    vec2 r = vec2(fbm(p * 1.4 + 1.6 * q + vec2(1.7, 9.2) + t * 0.7),
                  fbm(p * 1.4 + 1.6 * q + vec2(8.3, 2.8) - t * 0.5));
    float n = fbm(p * 1.4 + 1.9 * r);
    n = n * 0.5 + 0.5;

    // gentle cursor warp
    float md = distance(p, m);
    float mInf = exp(-md * 2.5) * intensity;
    n += mInf * 0.18;

    // muted color ramp — deep navy field with a restrained purple lift
    vec3 col = mix(NIGHT, NAVY, smoothstep(0.25, 0.7, n));
    col = mix(col, PURPLE, smoothstep(0.62, 1.0, n) * 0.35 * intensity);
    col = mix(col, VIOLET, mInf * 0.10);

    // grain + vignette
    float g = hash22(uv * uRes.xy * 0.5 + uTime).x;
    col += g * 0.012;
    float vig = smoothstep(1.3, 0.3, length(uv - 0.5));
    col *= 0.85 + 0.15 * vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function HeroCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Resolve device prefs inside the effect → the context is created exactly once.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const animated = !reduce && !coarse; // touch + reduced-motion get a single static frame

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "default" });
    } catch {
      return; // no WebGL → CSS fallback behind the canvas shows
    }

    const dpr = Math.min(coarse ? 1 : 1.25, window.devicePixelRatio || 1); // soft field — low DPR is invisible, halves GPU cost
    renderer.setPixelRatio(dpr);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uIntensity: { value: animated ? 1.0 : 0.5 },
    };
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w, h);
      if (!animated) renderer.render(scene, camera); // keep static frame crisp on resize
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const onMove = (e: PointerEvent) => {
      targetMouse.set(e.clientX / window.innerWidth, 1.0 - e.clientY / window.innerHeight);
    };
    if (animated && fine) window.addEventListener("pointermove", onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0 });
    io.observe(canvas);

    // Recover gracefully from GPU context loss.
    const onLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(raf);
    };
    const onRestored = () => {
      if (animated) renderFrame();
      else renderer.render(scene, camera);
    };
    canvas.addEventListener("webglcontextlost", onLost, false);
    canvas.addEventListener("webglcontextrestored", onRestored, false);

    let raf = 0;
    let prevNow = performance.now();
    let lastDraw = 0;
    const frameMs = 1000 / 30; // slow-moving field — 30fps halves GPU work, imperceptible
    const renderFrame = () => {
      raf = requestAnimationFrame(renderFrame);
      const now = performance.now();
      if (!visible || document.hidden || renderer.getContext().isContextLost()) {
        prevNow = now; // don't accumulate paused time
        return;
      }
      if (now - lastDraw < frameMs) return;
      lastDraw = now;
      uniforms.uTime.value += (now - prevNow) / 1000;
      prevNow = now;
      uniforms.uMouse.value.lerp(targetMouse, 0.05);
      const rect = canvas.getBoundingClientRect();
      const sp = Math.min(1, Math.max(0, -rect.top / Math.max(window.innerHeight, 1)));
      uniforms.uScroll.value += (sp - uniforms.uScroll.value) * 0.1;
      renderer.render(scene, camera);
    };

    if (animated) renderFrame();
    else renderer.render(scene, camera); // single static frame

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      geometry.dispose();
      material.dispose();
      renderer.forceContextLoss();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
