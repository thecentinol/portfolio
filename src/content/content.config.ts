import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		tags: z.array(z.string()),
		displayedTags: z.array(z.string()),
		github: z.string().url().optional(),
		live: z.string().url().optional(),
		problem: z.string().optional(),
		featured: z.boolean().default(false),
	}),
});

export const collections = { projects };
