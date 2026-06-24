// Personal info - edit this to make the portfolio yours
export const profile = {
  // The display name shown across the site
  name: 'emkacz',
  // Domain shown in the nav and footer
  domain: 'emkacz.dev',
  // Pronouns (optional - set to empty string to hide)
  pronouns: '',
  // Location (optional)
  location: 'Somewhere on the internet',
  // Short tagline used in the hero
  tagline: 'I build software that solves real problems.',
  // Longer "currently" line - swap as life changes
  current: 'Currently shipping indie tools & open source.',
  // Used for SEO + hero description
  bio: 'Coder, builder, lifelong learner. I love clean architecture, sharp UX, and shipping things people actually use.',
  // Social links - drop the ones you don't use
  socials: {
    github: 'https://github.com/emkacztoja',
    email: 'mailto:akowalczuk@emkacz.pl',
    linkedin: 'https://linkedin.com/in/aleksander-kowalczuk',
  },
  // Tech stack shown in the marquee - pick what you actually use
  stack: [
  // Core Languages
  'TypeScript', 'Java', 'Kotlin', 'Python',
  
  // Frontend & UI
  'Astro', 'React', 'Tailwind CSS',
  
  // Backend & Databases
  'Node.js', 'PostgreSQL', 'Prisma ORM',
  
  // DevOps & Infrastructure
  'Docker', 'Linux', 'Nginx', 'GitHub Actions', 'CI/CD', 'Git'
]
} as const;

export type Profile = typeof profile;