export {};

export type GtmEvent =
  | { event: 'contact_click'; link_text: string; link_url: string }
  | { event: 'projects_click'; link_text: string; link_url: string };
  // dodawaj kolejne warianty w miarę potrzeb

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}