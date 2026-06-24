import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // Keystatic writes .md files here; we load them as a content collection.
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),

  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    role: z.string(),
    year: z.number().int(),
    status: z.enum(['shipped', 'in-progress', 'archived']),
    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
        docs: z.string().url().optional(),
      })
      .default({}),
    size: z.enum(['lg', 'md', 'sm']),
    featured: z.boolean().default(false),
    accent: z.enum(['violet', 'cyan', 'amber', 'rose']).optional(),
  }),
});

export const collections = { projects };