export type CardItem = {
  title?: string;
  body?: string;
  image?: string;
  icon?: string;
  name?: string;
  company?: string;
};

export type SectionType =
  | "cardGrid"
  | "ctaBand"
  | "bookingCta"
  | "fullCycle"
  | "storyBlocks"
  | "caseStudies"
  | "logoRow"
  | "reviews"
  | "servicesStrip"
  | "partners"
  | "industries"
  | "testimonials";

/**
 * The source pages are inconsistent, so renderers use a permissive shared shape
 * and gracefully default any fields a section does not provide.
 */
export type PageSection = {
  type: SectionType;
  heading?: string;
  lead?: string;
  footnote?: string;
  columns?: number;
  items?: CardItem[];
  labels?: string[];
  linkLabel?: string;
  href?: string;
  ctaLabel?: string;
};
