import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Syne",
			weights: ["400", "700", "800"],
			cssVariable: "--font-syne",
		},
		{
			provider: fontProviders.google(),
			name: "DM Sans",
			weights: ["200", "400", "700"],
			cssVariable: "--font-dmsans",
		},
		{
			provider: fontProviders.google(),
			name: "IBM Plex Mono",
			weights: ["300"],
			cssVariable: "--font-ibm",
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
	output: "static",
});
