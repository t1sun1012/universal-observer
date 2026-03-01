import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writings" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Poetry', 'Essay', 'Fiction']),
    snippet: z.string(),
    imageUrl: z.string(),
    readingTime: z.string().optional(),
    quote: z.string().optional(),
  }),
});

export const collections = {
  writings,
};
