import {
  generateMetadata,
  generateStaticParams,
  ProductDetailPage,
} from "@/modules/WhatWeBuild/pages/ProductPage";

export const dynamicParams = false;
export { generateMetadata, generateStaticParams };

export default function Page(props: PageProps<"/what-we-build/[category]/[product]">) {
  return <ProductDetailPage params={props.params} />;
}
