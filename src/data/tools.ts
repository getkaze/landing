export interface ToolConfig {
  name: string;
  github: string;
  description: string;
  sidebar: {
    en: { label: string; href: string }[];
    pt: { label: string; href: string }[];
  };
}

export const keel: ToolConfig = {
  name: 'keel',
  github: 'https://github.com/getkaze/keel',
  description: 'Keel docs: self-hosted Docker dashboard.',
  sidebar: {
    en: [
      { label: 'Getting Started', href: '/keel/docs/en' },
      { label: 'Usage', href: '/keel/docs/en/usage' },
      { label: 'Services', href: '/keel/docs/en/services' },
      { label: 'Seeders', href: '/keel/docs/en/seeders' },
      { label: 'Dev Mode', href: '/keel/docs/en/dev-mode' },
      { label: 'Remote Targets', href: '/keel/docs/en/remote-targets' },
    ],
    pt: [
      { label: 'Primeiros Passos', href: '/keel/docs/pt' },
      { label: 'Uso', href: '/keel/docs/pt/usage' },
      { label: 'Services', href: '/keel/docs/pt/services' },
      { label: 'Seeders', href: '/keel/docs/pt/seeders' },
      { label: 'Dev Mode', href: '/keel/docs/pt/dev-mode' },
      { label: 'Targets Remotos', href: '/keel/docs/pt/remote-targets' },
    ],
  },
};

export const helm: ToolConfig = {
  name: 'helm',
  github: 'https://github.com/getkaze/helm',
  description: 'Helm docs: AI agent orchestration for backend development.',
  sidebar: {
    en: [
      { label: 'Getting Started', href: '/helm/docs/en' },
      { label: 'Pipeline', href: '/helm/docs/en/pipeline' },
      { label: 'Usage', href: '/helm/docs/en/usage' },
      { label: 'Agents', href: '/helm/docs/en/agents' },
      { label: 'Sessions', href: '/helm/docs/en/sessions' },
      { label: 'Governance', href: '/helm/docs/en/governance' },
    ],
    pt: [
      { label: 'Primeiros Passos', href: '/helm/docs/pt' },
      { label: 'Pipeline', href: '/helm/docs/pt/pipeline' },
      { label: 'Uso', href: '/helm/docs/pt/usage' },
      { label: 'Agentes', href: '/helm/docs/pt/agents' },
      { label: 'Sessões', href: '/helm/docs/pt/sessions' },
      { label: 'Governança', href: '/helm/docs/pt/governance' },
    ],
  },
};
