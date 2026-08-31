import {
  BlogPostPage,
  generateMetadata,
  generateStaticParams,
} from "@/modules/Blog/pages/BlogPostPage";

export const dynamicParams = false;
export { generateMetadata, generateStaticParams };

export default function Page(props: PageProps<"/blog/[slug]">) {
  return <BlogPostPage params={props.params} />;
}