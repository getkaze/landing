export interface Logo {
  name: string;
  href?: string;
  logo?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  handle: string;
  photo?: string;
  linkedin?: string;
}

export const logos: Logo[] = [
  { name: 'Kaze', href: 'https://getkaze.dev', logo: '/logo-dark.png' },
  { name: 'Gaudium', href: 'https://www.gaudium.global', logo: '/logos/gaudium.png' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Keel replaced our entire Docker management workflow. One binary, zero headaches.',
    author: 'Alex Chen',
    handle: '@alexchen',
    linkedin: 'https://linkedin.com/in/alexchen',
  },
  {
    quote: 'Helm turned our chaotic AI-assisted development into a structured pipeline. Game changer.',
    author: 'Maria Santos',
    handle: '@msantos',
    linkedin: 'https://linkedin.com/in/msantos',
  },
  {
    quote: 'Mole catches things in code review that we used to miss entirely. The growth dashboard is a bonus.',
    author: 'Jordan Park',
    handle: '@jpark_dev',
    linkedin: 'https://linkedin.com/in/jpark-dev',
  },
  {
    quote: 'We switched from Portainer to Keel and never looked back. Lighter, faster, and actually pleasant to use.',
    author: 'Liam Torres',
    handle: '@liamt',
    linkedin: 'https://linkedin.com/in/liamtorres',
  },
  {
    quote: 'Helm is the missing piece for AI-assisted backend work. It keeps Claude focused and productive instead of going in circles.',
    author: 'Priya Sharma',
    handle: '@priya_dev',
    linkedin: 'https://linkedin.com/in/priyasharma',
  },
  {
    quote: 'The gamification in Mole got our junior devs actually excited about code reviews. That alone was worth it.',
    author: 'Daniel Kim',
    handle: '@dkim',
    linkedin: 'https://linkedin.com/in/danielkim',
  },
  {
    quote: 'I love that everything is a single binary. No containers, no runtimes, no surprises. Just download and run.',
    author: 'Sofia Andrade',
    handle: '@sofia_eng',
    linkedin: 'https://linkedin.com/in/sofiaandrade',
  },
];
