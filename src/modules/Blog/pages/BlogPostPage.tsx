import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/primitives";
import { CTA } from "@/components/sections/cta";
import { blogPosts, getPost } from "@/modules/Blog/utils/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, url: `/blog/${post.slug}/` },
  };
}

export async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main>
      <PageHero eyebrow={`${post.readingTime} min read`} title={post.title} subtitle={post.excerpt} />

      <section className="bg-brand-mist py-24 md:py-32">
        <Container className="max-w-2xl">
          <Reveal>
            <article className="flex flex-col gap-5">
              {post.blocks.map((b, i) =>
                b.type === "h" ? (
                  <h2 key={i} className="mt-6 text-2xl font-semibold text-brand-ink">
                    {b.text}
                  </h2>
                ) : b.type === "list" ? (
                  <ul key={i} className="flex list-disc flex-col gap-2 pl-6 text-lg leading-relaxed text-brand-ink/75 marker:text-brand-purple">
                    {(b.items ?? []).map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="text-lg leading-relaxed text-brand-ink/75">
                    {b.text}
                  </p>
                ),
              )}
            </article>
          </Reveal>

          <div className="mt-14 border-t border-brand-ink/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-violet hover:text-brand-purple"
            >
              ← All insights
            </Link>
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
