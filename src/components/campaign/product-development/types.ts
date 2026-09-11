export type CampaignStat = {
  value: string;
  label: string;
};

export type CampaignHeroContent = {
  headline: string;
  highlightedHeadline: string;
  description: string;
  stats: readonly CampaignStat[];
  formId: string;
  formIdPrefix: string;
  submitLabel: string;
};

export type CampaignBacker = {
  src: string;
  alt: string;
};

export type CampaignBackersContent = {
  heading: string;
  backers: readonly CampaignBacker[];
};

export type CampaignProcessStep = {
  title: string;
  subtitle: string;
  items: readonly string[];
  result: string;
  icon: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageFirst: boolean;
  backgroundColor: string;
};

export type CampaignProcessContent = {
  heading: string;
  steps: readonly CampaignProcessStep[];
};

export type CampaignComparisonColumn = {
  title: string;
  items: readonly string[];
};

export type CampaignThinkingContent = {
  eyebrow: string;
  heading: string;
  highlightedHeading: string;
  standard: CampaignComparisonColumn;
  preferred: CampaignComparisonColumn;
};

export type CampaignFlexibleTeamContent = {
  eyebrow: string;
  heading: string;
  lead: string;
  emphasizedLead: string;
  trailingLead: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

export type CampaignCaseStudy = {
  title: string;
  image: string;
  description: string;
  result: string;
};

export type CampaignCaseStudiesContent = {
  eyebrow: string;
  heading: string;
  carouselLabel: string;
  studies: readonly CampaignCaseStudy[];
};

export type CampaignStrategyCallContent = {
  sectionId: string;
  eyebrow: string;
  heading: string;
  outcomes: readonly string[];
  closingText: string;
  emphasizedClosingText: string;
  formHeading: string;
  formDescription: string;
  formIdPrefix: string;
  submitLabel: string;
};

export type CampaignFaqItem = {
  question: string;
  answer: string;
};

export type CampaignFaqContent = {
  eyebrow: string;
  heading: string;
  items: readonly CampaignFaqItem[];
};

export type ProductDevelopmentCampaignContent = {
  hero: CampaignHeroContent;
  backers: CampaignBackersContent;
  process: CampaignProcessContent;
  thinking: CampaignThinkingContent;
  testimonials: {
    id: string;
    headline: string;
    sub: string;
    showLogos: boolean;
  };
  flexibleTeam: CampaignFlexibleTeamContent;
  caseStudies: CampaignCaseStudiesContent;
  strategyCall: CampaignStrategyCallContent;
  faq: CampaignFaqContent;
};
