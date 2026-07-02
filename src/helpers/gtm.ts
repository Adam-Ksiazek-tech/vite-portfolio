import type { GtmEvent } from '../types/gtm';

export function pushToDataLayer(payload: GtmEvent) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(payload);
  }
}