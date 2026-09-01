import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui";
import { ArrowUpRight } from "@/components/brand/marks";
import { Stagger, StaggerItem } from "@/components/motion/primitives";
import { CTA } from "@/components/sections/cta";
import { getPosts } from "@/modules/Blog/utils/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Playbooks and perspective for non-technical founders — building, validating, and scaling software products.",
};

export async function BlogIndexPage() {
  const blogPosts = await getPosts();

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Playbooks for building what matters."
        gradientFrom={2}
        subtitle="Hard-won lessons on validating, building, and scaling products — written for the founders we work with."
      />

      <section className="bg-brand-mist py-24 md:py-32">
        <Container>
          {blogPosts.length > 0 ? (
            <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" amount={0.1}>
              {blogPosts.map((post) => (
                <StaggerItem key={post.slug} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col justify-between gap-8 rounded-card border border-brand-ink/[0.07] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-mist"
                  >
                    <div className="flex flex-col gap-3">
                      <span className="text-sm font-semibold tracking-tight text-brand-violet">
                        {post.readingTime ?? 5} min read
                      </span>
                      <h2 className="text-xl font-semibold leading-snug text-brand-ink">{post.title}</h2>
                      <p className="text-[0.95rem] leading-relaxed text-brand-ink/60">{post.excerpt}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-violet">
                      Read
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="rounded-card border border-brand-ink/[0.07] bg-white p-8 text-brand-ink/65">
              No insights have been published yet.
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </main>
  );
}
