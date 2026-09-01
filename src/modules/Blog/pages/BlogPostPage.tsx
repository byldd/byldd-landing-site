import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui";
import { CTA } from "@/components/sections/cta";
import { getPost } from "@/modules/Blog/utils/blog";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.meta?.title || post.title,
    description: post.meta?.description || post.excerpt,
    openGraph: {
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.excerpt,
      url: `/blog/${post.slug}/`,
    },
  };
}

export async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const featuredImage =
    post.featuredImage && typeof post.featuredImage !== "string" ? post.featuredImage : null;
  const featuredImageUrl = featuredImage?.url;
  const featuredImageWidth = featuredImage?.width ?? 1600;
  const featuredImageHeight = featuredImage?.height ?? 900;

  return (
    <main>
      <PageHero eyebrow={`${post.readingTime ?? 5} min read`} title={post.title} subtitle={post.excerpt} />

      <section className="bg-brand-mist py-24 md:py-32">
        <Container>
          {featuredImageUrl && (
            <figure className="mx-auto mb-14 max-w-5xl overflow-hidden rounded-3xl md:mb-20">
              <Image
                src={featuredImageUrl}
                alt={featuredImage.alt || post.title}
                width={featuredImageWidth}
                height={featuredImageHeight}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
                className="h-auto w-full object-cover"
              />
            </figure>
          )}

          <div className="w-auto">
            <article>
              <RichText
                data={post.content}
                className="flex flex-col gap-5 text-lg leading-relaxed text-brand-ink/75 [&_a]:font-medium [&_a]:text-brand-violet [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-l-4 [&_blockquote]:border-brand-purple [&_blockquote]:pl-5 [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-brand-ink [&_h3]:mt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-brand-ink [&_ol]:flex [&_ol]:list-decimal [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-6 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6 [&_li]:pl-1 [&_li::marker]:text-brand-purple"
              />
            </article>

            <div className="mt-14 border-t border-brand-ink/10 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-violet hover:text-brand-purple"
              >
                ← All insights
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
