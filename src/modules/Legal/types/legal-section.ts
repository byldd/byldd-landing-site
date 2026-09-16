export type LegalSection = {
  heading: string;
  body: (
    | string
    | { heading: string; text: string }
    | { type: "ordered-list"; items: string[] }
  )[];
};
