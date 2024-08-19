// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: [
		"@primevue/nuxt-module",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@vueuse/nuxt",
		"@nuxt/content",
		"@nuxt/image",
		"@nuxtjs/sitemap",
		"@nuxtjs/robots",
		"nuxt-link-checker",
	],
	site: {
		url: "https://invoicewolf.net",
		name: "InvoiceWolf",
	},
	css: ["primeicons/primeicons.css", "assets/main.css"],
	tailwindcss: {
		configPath: "tailwind.config.ts",
	},
	vite: {
		optimizeDeps: {
			exclude: ["@vueuse/core"],
		},
	},
	content: {
		markdown: {
			anchorLinks: false,
		},
	},
	primevue: {
		autoImport: false,
		components: {
			prefix: "pv",
			include: ["Menubar", "ToggleSwitch", "Button", "Divider"],
		},
		options: {
			theme: {
				preset: definePreset(Aura, {
					semantic: {
						colorScheme: {
							primary: {
								50: "{teal.50}",
								100: "{teal.100}",
								200: "{teal.200}",
								300: "{teal.300}",
								400: "{teal.400}",
								500: "{teal.500}",
								600: "{teal.600}",
								700: "{teal.700}",
								800: "{teal.800}",
								900: "{teal.900}",
								950: "{teal.950}",
							},
							light: {
								surface: {
									0: "#ffffff",
									50: "{zinc.50}",
									100: "{zinc.100}",
									200: "{zinc.200}",
									300: "{zinc.300}",
									400: "{zinc.400}",
									500: "{zinc.500}",
									600: "{zinc.600}",
									700: "{zinc.700}",
									800: "{zinc.800}",
									900: "{zinc.900}",
									950: "{zinc.950}",
								},
							},
							dark: {
								surface: {
									0: "#ffffff",
									50: "{zinc.50}",
									100: "{zinc.100}",
									200: "{zinc.200}",
									300: "{zinc.300}",
									400: "{zinc.400}",
									500: "{zinc.500}",
									600: "{zinc.600}",
									700: "{zinc.700}",
									800: "{zinc.800}",
									900: "{zinc.900}",
									950: "{zinc.950}",
								},
							},
						},
					},
				}),
				options: {
					prefix: "pv",
					darkModeSelector: ".dark-mode",
				},
			},
		},
	},
});
