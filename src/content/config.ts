// src/content/config.ts
import { defineCollection } from "astro:content";
import { airtableLoader } from "@ascorbic/airtable-loader";

const events = defineCollection({
    loader: airtableLoader({
        base: import.meta.env.AIRTABLE_BASE,
        table: "Events",
    }),
});

export const collections = { events };
