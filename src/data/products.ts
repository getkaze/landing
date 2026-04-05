export interface Product {
  name: string;
  tagline: string;
  version: string;
  href: string;
  github: string;
  docsHref: string;
  icon: string;
}

export const keel: Product = {
  name: 'Keel',
  tagline: 'Self-hosted Docker dashboard. One binary, zero dependencies.',
  version: 'v0.6',
  href: '/keel',
  github: 'https://github.com/getkaze/keel',
  docsHref: '/keel/docs/en',
  icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10h10M7 14h6"/></svg>`,
};

export const helm: Product = {
  name: 'Helm',
  tagline: 'AI agent orchestration for backend development.',
  version: 'v0.2',
  href: '/helm',
  github: 'https://github.com/getkaze/helm',
  docsHref: '/helm/docs/en',
  icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
};

export const mole: Product = {
  name: 'Mole',
  tagline: 'AI-powered code review with gamification and team dashboards.',
  version: 'v0.1',
  href: '/mole',
  github: 'https://github.com/getkaze/mole',
  docsHref: '/mole/docs/en',
  icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

export const allProducts: Product[] = [keel, helm, mole];
