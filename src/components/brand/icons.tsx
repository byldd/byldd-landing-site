import type { JSX, ReactNode } from "react";

/**
 * BYLDD bespoke icon set.
 *
 * House rules (match components/brand/marks.tsx):
 *  - 24x24 grid, geometry drawn inside x/y 2..22 (~2px optical padding)
 *  - stroke-only, currentColor, 1.5 weight, round caps + joins
 *  - no hardcoded colour: tint with Tailwind `text-*`
 *  - the 4-point concave sparkle is the brand's signature motif and is reused
 *    (as an outline) wherever an icon needs to say "AI / new / transformed"
 *
 * Every icon is a pure SVG function component — no hooks, no state, so this
 * file is safe to import from React Server Components ("use client" not needed).
 */

export type IconProps = { className?: string };

type IconComponent = (props: IconProps) => JSX.Element;

/** Shared <svg> shell so every icon is guaranteed identical stroke attributes. */
function Base({ children, ...props }: IconProps & { children: ReactNode }): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export type IconName =
  // Technologies
  | "ai"
  | "machine-learning"
  | "cloud"
  | "nlp"
  | "web3"
  | "api"
  | "devops"
  | "workflow-automation"
  | "agentic-ai"
  | "data-engineering"
  // Industries
  | "healthcare"
  | "fintech"
  | "restaurant"
  | "travel"
  | "banking"
  | "fitness"
  | "entertainment"
  | "e-commerce"
  | "construction"
  | "politics"
  | "logistics"
  | "supply-chain"
  | "insurance"
  | "real-estate"
  | "retail"
  | "education"
  // Process
  | "discover"
  | "design"
  | "build"
  | "launch"
  | "iterate"
  // Service categories
  | "app"
  | "software"
  | "mvp"
  | "workflow"
  | "ai-service"
  | "digital-transformation";

export const icons: Record<IconName, IconComponent> = {
  /* ---------------------------------------------------------------- TECH */

  // Silicon chip with radiating pins.
  "ai": (props) => (
    <Base {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2.5" />
      <rect x="10.25" y="10.25" width="3.5" height="3.5" rx="1" />
      <path d="M10 7V3.5M14 7V3.5M10 17v3.5M14 17v3.5M7 10H3.5M7 14H3.5M17 10h3.5M17 14h3.5" />
    </Base>
  ),

  // Neural network: 3 input nodes, 2 output nodes, fully connected.
  "machine-learning": (props) => (
    <Base {...props}>
      <circle cx="5.5" cy="6" r="1.6" />
      <circle cx="5.5" cy="12" r="1.6" />
      <circle cx="5.5" cy="18" r="1.6" />
      <circle cx="18.5" cy="8.5" r="1.6" />
      <circle cx="18.5" cy="15.5" r="1.6" />
      <path d="M7.76 6.43 16.24 8.07M7.72 11.4 16.28 9.1M7.72 12.6 16.28 14.9M7.76 17.57 16.24 16.43" />
    </Base>
  ),

  // Cloud outline.
  "cloud": (props) => (
    <Base {...props}>
      <path d="M17.5 20H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </Base>
  ),

  // Speech bubble carrying a waveform — language in, language out.
  "nlp": (props) => (
    <Base {...props}>
      <path d="M6 4h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7.5L7 20V16H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
      <path d="M7.5 8.5v4M10.5 7v7M13.5 8.75v3.5M16.5 9.5v2" />
    </Base>
  ),

  // Isometric block — the unit of a chain.
  "web3": (props) => (
    <Base {...props}>
      <path d="M12 2.8 3.5 7.4v9.2L12 21.2l8.5-4.6V7.4z" />
      <path d="M3.5 7.4 12 12l8.5-4.6" />
      <path d="M12 12v9.2" />
    </Base>
  ),

  // Curly braces around an endpoint node.
  "api": (props) => (
    <Base {...props}>
      <path d="M9 4H8a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1" />
      <path d="M15 20h1a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2 2 2 0 0 1-2-2V6a2 2 0 0 0-2-2h-1" />
      <path d="M6.5 12h3.4M14.1 12h3.4" />
      <circle cx="12" cy="12" r="1.6" />
    </Base>
  ),

  // Infinity loop — continuous delivery.
  "devops": (props) => (
    <Base {...props}>
      <path d="M12 12c-2-3-3.5-4.5-5.5-4.5a4.5 4.5 0 1 0 0 9c2 0 3.5-1.5 5.5-4.5z" />
      <path d="M12 12c2 3 3.5 4.5 5.5 4.5a4.5 4.5 0 1 0 0-9c-2 0-3.5 1.5-5.5 4.5z" />
    </Base>
  ),

  // Two steps wired by an elbow arrow, with the brand sparkle for "automatic".
  "workflow-automation": (props) => (
    <Base {...props}>
      <rect x="2.5" y="3" width="7" height="7" rx="2" />
      <rect x="14.5" y="14" width="7" height="7" rx="2" />
      <path d="M6 10v4.5a3 3 0 0 0 3 3h4" />
      <path d="M11 15.5 13 17.5l-2 2" />
      <path d="M18.5 3Q18.5 6 21.5 6Q18.5 6 18.5 9Q18.5 6 15.5 6Q18.5 6 18.5 3z" />
    </Base>
  ),

  // Agent: robot head with antenna.
  "agentic-ai": (props) => (
    <Base {...props}>
      <rect x="4.5" y="8.5" width="15" height="11" rx="3.5" />
      <path d="M12 8.5V5.5" />
      <circle cx="12" cy="4" r="1.5" />
      <path d="M4.5 14H2.5M19.5 14h2" />
      <circle cx="9" cy="13.5" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="1.05" fill="currentColor" stroke="none" />
      <path d="M9.5 16.8h5" />
    </Base>
  ),

  // Stacked database cylinders.
  "data-engineering": (props) => (
    <Base {...props}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v12c0 1.66 3.58 3 8 3s8-1.34 8-3v-12" />
      <path d="M4 11.5c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </Base>
  ),

  /* ----------------------------------------------------------- INDUSTRIES */

  // Heart with an ECG trace.
  "healthcare": (props) => (
    <Base {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
      <path d="M3.9 12.5h3.6l1.5-2.9 2.6 6 2-4.6 1.2 1.5h5.2" />
    </Base>
  ),

  // Payment card with chip and a rising bar chart.
  "fintech": (props) => (
    <Base {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <path d="M2.5 9.5h19" />
      <rect x="6" y="12.5" width="4.5" height="3.5" rx="1" />
      <path d="M13.5 16v-1.5M16 16v-3M18.5 16v-4.5" />
    </Base>
  ),

  // Fork and knife.
  "restaurant": (props) => (
    <Base {...props}>
      <path d="M4 3v5.5a3.5 3.5 0 0 0 7 0V3" />
      <path d="M7.5 3v5.5" />
      <path d="M7.5 12v9" />
      <path d="M16.5 21V3c2.3 2.2 3.5 5 3.5 7.9 0 2.3-1.4 3.6-3.5 3.9" />
    </Base>
  ),

  // Aeroplane, plan view.
  "travel": (props) => (
    <Base {...props}>
      <path d="M12 2c1.1 0 2 1.57 2 3.5V9l7 4v2.6l-7-2V17l2.5 2v2L12 19.6l-4.5 1.4v-2l2.5-2v-3.4l-7 2V13l7-4V5.5C10 3.57 10.9 2 12 2z" />
    </Base>
  ),

  // Classical bank: pediment, columns, plinth.
  "banking": (props) => (
    <Base {...props}>
      <path d="M12 3 21 8.5H3z" />
      <path d="M5.5 8.5v9M9.8 8.5v9M14.2 8.5v9M18.5 8.5v9" />
      <path d="M3 17.5h18" />
      <path d="M2 21h20" />
    </Base>
  ),

  // Dumbbell.
  "fitness": (props) => (
    <Base {...props}>
      <path d="M6.5 7v10M3 9.5v5M17.5 7v10M21 9.5v5M6.5 12h11" />
    </Base>
  ),

  // Play button in a rounded frame.
  "entertainment": (props) => (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="16" rx="4" />
      <path d="M10 8.75 16.25 12 10 15.25z" />
    </Base>
  ),

  // Shopping bag.
  "e-commerce": (props) => (
    <Base {...props}>
      <path d="M4.5 7.5h15l-1.1 12a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8z" />
      <path d="M8.5 10.5V6a3.5 3.5 0 0 1 7 0v4.5" />
    </Base>
  ),

  // Hard hat.
  "construction": (props) => (
    <Base {...props}>
      <path d="M3.5 16.5h17a1.5 1.5 0 0 1 0 3h-17a1.5 1.5 0 0 1 0-3z" />
      <path d="M5.5 16.5v-3a6.5 6.5 0 0 1 13 0v3" />
      <path d="M8.6 8.6v7.9M15.4 8.6v7.9" />
    </Base>
  ),

  // Marked ballot going into the box.
  "politics": (props) => (
    <Base {...props}>
      <rect x="8.5" y="3" width="7" height="8" rx="1.5" />
      <path d="M10.5 7.2 11.9 8.6 14.5 5.6" />
      <rect x="3.5" y="13" width="17" height="7.5" rx="2" />
      <path d="M8.5 16.5h7" />
    </Base>
  ),

  // Delivery truck.
  "logistics": (props) => (
    <Base {...props}>
      <rect x="2.5" y="6.5" width="11" height="9.5" rx="1.5" />
      <path d="M13.5 10h3.7l3.3 3.3V16h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </Base>
  ),

  // Linked containers under a flow arrow.
  "supply-chain": (props) => (
    <Base {...props}>
      <rect x="3" y="13" width="18" height="6.5" rx="1.5" />
      <path d="M9 13v6.5M15 13v6.5" />
      <path d="M5 10.5a7 7 0 0 1 14 0" />
      <path d="M17.2 8.6 19 10.5l1.8-1.9" />
    </Base>
  ),

  // Shield with a check.
  "insurance": (props) => (
    <Base {...props}>
      <path d="M12 2.8 4.5 5.8v5.7c0 4.5 3.2 8.2 7.5 9.2 4.3-1 7.5-4.7 7.5-9.2V5.8z" />
      <path d="M9 12.2 11.2 14.4 15.2 10" />
    </Base>
  ),

  // House with a keyhole.
  "real-estate": (props) => (
    <Base {...props}>
      <path d="M3.5 10.5 12 3.5l8.5 7V20a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" />
      <circle cx="12" cy="13.5" r="1.6" />
      <path d="M12 15.1v3" />
    </Base>
  ),

  // Storefront with a striped awning.
  "retail": (props) => (
    <Base {...props}>
      <path d="M2.5 9.5 4.6 4.7A2 2 0 0 1 6.4 3.5h11.2a2 2 0 0 1 1.8 1.2l2.1 4.8z" />
      <path d="M9 3.5 7.8 9.5M15 3.5l1.2 6" />
      <path d="M4 9.5V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.5" />
      <path d="M10 21v-5h4v5" />
    </Base>
  ),

  // Graduation cap.
  "education": (props) => (
    <Base {...props}>
      <path d="M2.5 8.5 12 4l9.5 4.5L12 13z" />
      <path d="M6 10.8V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.2" />
      <path d="M21.5 8.8v4.4" />
    </Base>
  ),

  /* -------------------------------------------------------------- PROCESS */

  // Magnifier.
  "discover": (props) => (
    <Base {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.4 15.4 20.5 20.5" />
    </Base>
  ),

  // Pen nib with vent hole and slit.
  "design": (props) => (
    <Base {...props}>
      <path d="M12 21.5 5.6 9a1.5 1.5 0 0 1 .5-1.9l5.1-3.4a1.5 1.5 0 0 1 1.6 0l5.1 3.4a1.5 1.5 0 0 1 .5 1.9z" />
      <path d="M6.7 10.5h10.6" />
      <circle cx="12" cy="13.6" r="1.3" />
      <path d="M12 14.9v6.6" />
    </Base>
  ),

  // Code brackets.
  "build": (props) => (
    <Base {...props}>
      <path d="M8.5 7.5 3.5 12l5 4.5M15.5 7.5 20.5 12l-5 4.5M13.6 5.5 10.4 18.5" />
    </Base>
  ),

  // Rocket.
  "launch": (props) => (
    <Base {...props}>
      <path d="M12 2.5c2.5 2.9 3.9 6.5 3.9 10.3V17H8.1v-4.2C8.1 9 9.5 5.4 12 2.5z" />
      <circle cx="12" cy="9.8" r="1.7" />
      <path d="M8.1 12.6 4.5 16.2V20l3.6-3z" />
      <path d="M15.9 12.6 19.5 16.2V20l-3.6-3z" />
      <path d="M10.7 20.4a1.3 1.3 0 0 0 2.6 0c0-.9-1.3-2.4-1.3-2.4s-1.3 1.5-1.3 2.4z" />
    </Base>
  ),

  // Circular arrows.
  "iterate": (props) => (
    <Base {...props}>
      <path d="M3.5 12a8.5 8.5 0 0 1 8.5-8.5 9.2 9.2 0 0 1 6.4 2.6L20.5 8" />
      <path d="M20.5 3.5V8H16" />
      <path d="M20.5 12a8.5 8.5 0 0 1-8.5 8.5 9.2 9.2 0 0 1-6.4-2.6L3.5 16" />
      <path d="M3.5 20.5V16H8" />
    </Base>
  ),

  /* ---------------------------------------------------- SERVICE CATEGORIES */

  // Phone.
  "app": (props) => (
    <Base {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10 5.5h4M10 18.5h4" />
    </Base>
  ),

  // Monitor with an app layout.
  "software": (props) => (
    <Base {...props}>
      <rect x="2.5" y="3.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 7.5h19" />
      <path d="M8.5 7.5v9" />
      <path d="M11 10.5h7M11 13.5h4.5" />
      <path d="M12 16.5v3M8.5 19.5h7" />
    </Base>
  ),

  // Lightbulb — the smallest thing worth shipping.
  "mvp": (props) => (
    <Base {...props}>
      <path d="M12 2.5a6.5 6.5 0 0 0-3.9 11.7c.6.5 1 1.2 1.1 2h5.6c.1-.8.5-1.5 1.1-2A6.5 6.5 0 0 0 12 2.5z" />
      <path d="M9.4 18.8h5.2M10.5 21.4h3" />
    </Base>
  ),

  // Branching node graph.
  "workflow": (props) => (
    <Base {...props}>
      <rect x="2.5" y="9" width="6" height="6" rx="1.5" />
      <rect x="15.5" y="3" width="6" height="6" rx="1.5" />
      <rect x="15.5" y="15" width="6" height="6" rx="1.5" />
      <path d="M8.5 12h1.5a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2h1.5" />
      <path d="M8.5 12h1.5a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h1.5" />
    </Base>
  ),

  // The brand sparkle, twice.
  "ai-service": (props) => (
    <Base {...props}>
      <path d="M10 3Q10 10.5 17.5 10.5Q10 10.5 10 18Q10 10.5 2.5 10.5Q10 10.5 10 3z" />
      <path d="M18.3 14.1Q18.3 17.4 21.6 17.4Q18.3 17.4 18.3 20.7Q18.3 17.4 15 17.4Q18.3 17.4 18.3 14.1z" />
    </Base>
  ),

  // Legacy block transformed into the sparkle.
  "digital-transformation": (props) => (
    <Base {...props}>
      <rect x="2.5" y="13" width="8" height="8" rx="2" />
      <path d="M11.2 12.3 13.8 9.7M11.4 9.7h2.4v2.4" />
      <path d="M17.2 2.5Q17.2 6.8 21.5 6.8Q17.2 6.8 17.2 11.1Q17.2 6.8 12.9 6.8Q17.2 6.8 17.2 2.5z" />
    </Base>
  ),
};

/** Ordered groups — handy for nav/menus and for the verification contact sheet. */
export const iconGroups: { label: string; names: IconName[] }[] = [
  {
    label: "Technologies",
    names: [
      "ai",
      "machine-learning",
      "cloud",
      "nlp",
      "web3",
      "api",
      "devops",
      "workflow-automation",
      "agentic-ai",
      "data-engineering",
    ],
  },
  {
    label: "Industries",
    names: [
      "healthcare",
      "fintech",
      "restaurant",
      "travel",
      "banking",
      "fitness",
      "entertainment",
      "e-commerce",
      "construction",
      "politics",
      "logistics",
      "supply-chain",
      "insurance",
      "real-estate",
      "retail",
      "education",
    ],
  },
  { label: "Process", names: ["discover", "design", "build", "launch", "iterate"] },
  {
    label: "Service categories",
    names: ["app", "software", "mvp", "workflow", "ai-service", "digital-transformation"],
  },
];

/**
 * Lookup renderer. Unknown names render nothing rather than throwing, so a bad
 * CMS string can never take a page down.
 */
export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component: IconComponent | undefined = icons[name];
  if (Component === undefined) return null;
  return <Component className={className} />;
}
