export interface NavItem {
  title: string;
  slug: string;
  order: number;
}

export interface ProductNav {
  en: NavItem[];
  pt: NavItem[];
}

export const keelNav: ProductNav = {
  en: [
    { title: 'Getting Started', slug: 'getting-started', order: 1 },
    { title: 'Usage', slug: 'usage', order: 2 },
    { title: 'Features', slug: 'features', order: 3 },
    { title: 'Seeders', slug: 'seeders', order: 4 },
    { title: 'Dev Mode', slug: 'dev-mode', order: 5 },
    { title: 'Remote Targets', slug: 'remote-targets', order: 6 },
    { title: 'Service Config', slug: 'service-config', order: 7 },
  ],
  pt: [
    { title: 'Primeiros Passos', slug: 'getting-started', order: 1 },
    { title: 'Uso', slug: 'usage', order: 2 },
    { title: 'Recursos', slug: 'features', order: 3 },
    { title: 'Seeders', slug: 'seeders', order: 4 },
    { title: 'Dev Mode', slug: 'dev-mode', order: 5 },
    { title: 'Targets Remotos', slug: 'remote-targets', order: 6 },
    { title: 'Configuração de Serviço', slug: 'service-config', order: 7 },
  ],
};

export const helmNav: ProductNav = {
  en: [
    { title: 'Getting Started', slug: 'getting-started', order: 1 },
    { title: 'Pipeline', slug: 'pipeline', order: 2 },
    { title: 'Usage', slug: 'usage', order: 3 },
    { title: 'Agents', slug: 'agents', order: 4 },
    { title: 'Sessions', slug: 'sessions', order: 5 },
    { title: 'Governance', slug: 'governance', order: 6 },
  ],
  pt: [
    { title: 'Primeiros Passos', slug: 'getting-started', order: 1 },
    { title: 'Pipeline', slug: 'pipeline', order: 2 },
    { title: 'Uso', slug: 'usage', order: 3 },
    { title: 'Agentes', slug: 'agents', order: 4 },
    { title: 'Sessões', slug: 'sessions', order: 5 },
    { title: 'Governança', slug: 'governance', order: 6 },
  ],
};

export const moleNav: ProductNav = {
  en: [
    { title: 'What is Mole?', slug: 'what-is-mole', order: 1 },
    { title: 'Install & Setup', slug: 'install-setup', order: 2 },
    { title: 'Usage', slug: 'usage', order: 3 },
    { title: 'How It Works', slug: 'how-it-works', order: 4 },
    { title: 'Context Files', slug: 'context-files', order: 5 },
    { title: 'Dashboard', slug: 'dashboard', order: 6 },
    { title: 'Config Reference', slug: 'config-reference', order: 7 },
    { title: 'Docker', slug: 'docker', order: 8 },
  ],
  pt: [
    { title: 'O que é o Mole?', slug: 'what-is-mole', order: 1 },
    { title: 'Instalação', slug: 'install-setup', order: 2 },
    { title: 'Uso', slug: 'usage', order: 3 },
    { title: 'Como Funciona', slug: 'how-it-works', order: 4 },
    { title: 'Arquivos de Contexto', slug: 'context-files', order: 5 },
    { title: 'Dashboard', slug: 'dashboard', order: 6 },
    { title: 'Referência de Config', slug: 'config-reference', order: 7 },
    { title: 'Docker', slug: 'docker', order: 8 },
  ],
};

export const navigation: Record<string, ProductNav> = {
  keel: keelNav,
  helm: helmNav,
  mole: moleNav,
};
