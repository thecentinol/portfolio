import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	fonts: [
		{
			provider: fontProviders.google(),
			name: "DM Sans",
			weights: ["200", "400", "700"],
			cssVariable: "--font-dmsans",
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
	output: "static",
});
