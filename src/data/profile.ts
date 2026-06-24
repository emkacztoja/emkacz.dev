// Personal info — edit this to make the portfolio yours
export const profile = {
  // The display name shown across the site
  name: 'emkacz',
  // Domain shown in the nav and footer
  domain: 'emkacz.dev',
  // Pronouns (optional — set to empty string to hide)
  pronouns: '',
  // Location (optional)
  location: 'Somewhere on the internet',
  // Short tagline used in the hero
  tagline: 'I build software that solves real problems.',
  // Longer "currently" line — swap as life changes
  current: 'Currently shipping indie tools & open source.',
  // Used for SEO + hero description
  bio: 'Coder, builder, lifelong learner. I love clean architecture, sharp UX, and shipping things people actually use.',
  // Social links — drop the ones you don't use
  socials: {
    github: 'https://github.com/emkacz',
    email: 'mailto:hello@emkacz.dev',
    linkedin: 'https://linkedin.com/in/emkacz',
    twitter: 'https://twitter.com/emkacz',
  },
  // Tech stack shown in the marquee — pick what you actually use
  stack: [
    'TypeScript', 'Astro', 'React', 'Node.js',
    'Java', 'Kotlin', 'Python', 'Go',
    'PostgreSQL', 'Redis', 'Docker', 'Linux',
  ],
} as const;

export type Profile = typeof profile;