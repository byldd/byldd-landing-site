/**
 * Content model for the /what-we-build section.
 *
 * Deliberately flat and serialisable (strings, arrays, slugs that reference each
 * other, no React) so each type maps onto a future Payload collection without
 * rewriting the pages. Inline text supports **bold** and [label](/href) only.
 */

export type ModuleGroup = {
  id: string;
  name: string;
  description: string;
};

export type Module = {
  /** Internal id (e.g. "PAY-03"). Never shown on the site. */
  id: string;
  /** ModuleGroup id. */
  group: string;
  name: string;
  description: string;
};

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  /** Where the page's pre-built modules section renders. */
  | { type: "modules" }
  /** Where the shared "How we build it" process renders. */
  | { type: "process" };

export type Faq = { q: string; a: string };

export type RelatedLink = { label: string; href: string };

export type ContentPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  /** Paragraphs before the first section heading. The first one is the hero subtitle. */
  intro: string[];
  blocks: Block[];
  faqs: Faq[];
  related: RelatedLink[];
};

export type ProductPage = ContentPage & {
  /** Modules this product uses. The rest of the category's modules are listed after them. */
  moduleIds: string[];
};

export type Category = ContentPage & {
  /** Lower-case short name used in labels, e.g. "Other marketplace modules". */
  shortName: string;
  /** Slugs of /services pages this hub links to. */
  relatedServices: string[];
  /** Category modules not used by any product page. The hub shows these plus every product's modules. */
  extraModuleIds: string[];
  products: ProductPage[];
};

export type IndexPage = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  cards: { category: string; label: string; blurb: string; types: string[] }[];
  modulesHeading: string;
  modulesIntro: string;
  whyHeading: string;
  whySummary: string;
};
