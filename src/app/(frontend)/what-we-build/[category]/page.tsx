import {
  CategoryPage,
  generateMetadata,
  generateStaticParams,
} from "@/modules/WhatWeBuild/pages/CategoryPage";

export const dynamicParams = false;
export { generateMetadata, generateStaticParams };

export default function Page(props: PageProps<"/what-we-build/[category]">) {
  return <CategoryPage params={props.params} />;
}
