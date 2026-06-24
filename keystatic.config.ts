import { config, collection, fields } from '@keystatic/core';

export default config({
  // `local` storage = writes directly to your filesystem (no GitHub needed).
  // Perfect for solo dev. When you're ready to deploy and let the live site
  // commit back to GitHub, swap to a `github` storage block — see Keystatic docs.
  storage: {
    kind: 'local',
  },

  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'body' },

      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            description: 'Display name shown on the card (e.g. "Sculk")',
          },
        }),

        summary: fields.text({
          label: 'Summary',
          description: 'Short blurb shown on small cards.',
          multiline: true,
        }),

        description: fields.text({
          label: 'Full description',
          description: 'Longer blurb shown on the large featured card.',
          multiline: true,
        }),

        stack: fields.array(
          fields.text({ label: 'Tech' }),
          {
            label: 'Tech stack',
            description: 'Languages, frameworks, key tools.',
            itemLabel: (props) => props.value || 'new tag',
          },
        ),

        role: fields.text({
          label: 'Role',
          description: 'Your role on the project (e.g. "Solo project").',
        }),

        year: fields.integer({
          label: 'Year',
          description: 'Year shipped or last updated.',
        }),

        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Shipped', value: 'shipped' },
            { label: 'In progress', value: 'in-progress' },
            { label: 'Archived', value: 'archived' },
          ],
          defaultValue: 'shipped',
        }),

        size: fields.select({
          label: 'Card size',
          description: 'How big the bento card should be on the homepage.',
          options: [
            { label: 'Large (2×2)', value: 'lg' },
            { label: 'Medium (2×1)', value: 'md' },
            { label: 'Small (1×1)', value: 'sm' },
          ],
          defaultValue: 'sm',
        }),

        featured: fields.checkbox({
          label: 'Featured',
          description: 'Show on the homepage.',
          defaultValue: false,
        }),

        accent: fields.select({
          label: 'Accent gradient',
          options: [
            { label: 'Violet → Pink', value: 'violet' },
            { label: 'Cyan → Indigo', value: 'cyan' },
            { label: 'Amber → Rose', value: 'amber' },
            { label: 'Rose → Violet', value: 'rose' },
          ],
          defaultValue: 'violet',
        }),

        links: fields.object({
          live: fields.url({ label: 'Live URL' }),
          repo: fields.url({ label: 'Source / repo URL' }),
          docs: fields.url({ label: 'Docs URL' }),
        }, {
          label: 'Links',
        }),

        body: fields.text({
          label: 'Long-form write-up (optional)',
          description: 'Optional deep-dive notes. Plain text — not currently rendered on the homepage, kept for future project detail pages.',
          multiline: true,
        }),
      },
    }),
  },
});