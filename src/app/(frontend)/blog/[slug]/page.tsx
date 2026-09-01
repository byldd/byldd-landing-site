import {
  BlogPostPage,
  generateMetadata,
} from "@/modules/Blog/pages/BlogPostPage";

export const dynamic = "force-dynamic";
export { generateMetadata };

export default function Page(props: PageProps<"/blog/[slug]">) {
  return <BlogPostPage params={props.params} />;
}
