import {
  generateMetadata,
  generateStaticParams,
  ServiceDetailPage,
} from "@/modules/Services/pages/ServiceDetailPage";

export const dynamicParams = false;
export { generateMetadata, generateStaticParams };

export default function Page(props: PageProps<"/services/[slug]">) {
  return <ServiceDetailPage params={props.params} />;
}