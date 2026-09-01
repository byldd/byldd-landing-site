import { BlogIndexPage, metadata } from "@/modules/Blog/pages/BlogIndexPage";

export { metadata };

export const dynamic = "force-dynamic";

export default async function Page() {
  return <BlogIndexPage />;
}
