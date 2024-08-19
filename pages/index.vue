<script setup lang="ts">
useHead({
	title: "InvoiceWolf",
	htmlAttrs: {
		lang: "en",
		class: "bg-surface-0 dark:bg-surface-950",
	},
	meta: [
		{ name: "title", content: "InvoiceWolf" },
		{ name: "description", content: "Generate invoices with ease" },

		{ name: "og:title", content: "InvoiceWolf" },
		{ name: "og:description", content: "Generate invoices with ease" },
		{ name: "og:image", content: "/images/InvoiceWolf-card.jpg" },
		{ name: "og:url", content: "https://invoicewolf.net" },

		{ name: "theme-color", content: useCssVar("--pv-primary-500").value },

		{ name: "twitter:title", content: "InvoiceWolf" },
		{ name: "twitter:description", content: "Generate invoices with ease" },
		{ name: "twitter:domain", content: "https://invoicewolf.net" },
		{ name: "twitter:url", content: "https://invoicewolf.net" },
		{ name: "twitter:image", content: "/images/InvoiceWolf-card.jpg" },
		{ name: "twitter:card", content: "summary_large_image" },

		{ name: "msapplication-TileColor", content: "#00aba9" },
	],
	link: [
		{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
		{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
		{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
		{ rel: "manifest", href: "/site.webmanifest" },
		{ rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
	],
});
</script>

<template>
	<top-bar class="z-10" />
	<main class="flex min-h-screen w-full select-none flex-col justify-center overflow-x-hidden">
		<section
			class="relative flex flex-col items-center gap-4 overflow-hidden bg-gradient-to-t from-primary-100 to-surface-0 px-10 py-32 text-center sm:h-screen sm:items-baseline sm:py-64 sm:text-left xl:px-48 dark:from-primary-950 dark:to-surface-950"
		>
			<icons-wolf class="absolute top-32 overflow-hidden fill-primary-100 dark:fill-primary-950" />
			<h1 class="z-10 text-6xl font-bold sm:text-9xl md:text-8xl">
				Invoice<span class="text-primary-500">Wolf</span>
			</h1>
			<p class="z-10 text-4xl font-semibold">
				Create invoices with ease
			</p>
			<div class="z-10 flex flex-row gap-4">
				<nuxt-link to="https://app.invoicewolf.net/">
					<pv-button
						label="Get started" rounded size="large"
						class="shadow-[0px_0px_30px_10px] shadow-primary-50 hover:shadow-primary-100 dark:shadow-primary-900 dark:hover:shadow-primary-700"
					/>
				</nuxt-link>
			</div>
		</section>
		<section
			class="relative flex h-screen flex-col gap-4 overflow-hidden bg-primary-100 px-10 py-24 xl:px-48 dark:bg-primary-950"
		>
			<div class="flex flex-col justify-between gap-8 xl:flex-row xl:gap-0">
				<div class="flex flex-col">
					<h1 class="text-5xl font-semibold sm:text-7xl lg:text-nowrap">
						Create professional<br>invoices
					</h1>
					<p class="text-xl">
						No account required
					</p>
				</div>
				<div class="relative top-0">
					<div class="absolute left-6 top-6 size-full -skew-x-12 bg-primary-400 blur-sm sm:left-24 sm:top-24 dark:bg-primary-800" />
					<div class="absolute left-4 top-4 size-full -skew-x-12 bg-primary-300 blur-sm sm:left-16 sm:top-16 dark:bg-primary-700" />
					<div class="absolute left-2 top-2 size-full -skew-x-12 bg-primary-200 blur-sm sm:left-8 sm:top-8 dark:bg-primary-600" />
					<img
						draggable="false" src="/images/ExampleInvoice.png" loading="lazy" alt="Example invoice"
						class="h-auto w-full -skew-x-12 shadow-[rgba(255,255,255,0.9)_0px_0px_75px_10px] dark:shadow-[rgba(255,255,255,0.4)_0px_0px_75px_10px]"
					>
				</div>
			</div>
		</section>
		<section
			class="relative flex flex-col gap-4 bg-gradient-to-t from-surface-0 to-primary-100 px-10 py-24 xl:px-48 dark:from-surface-950 dark:to-primary-950"
		>
			<h2 class="text-5xl font-semibold sm:text-7xl">
				Features
			</h2>
			<ul class="z-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
				<feature-card icon="verified">
					<template #title>
						Professional invoices
					</template>
					<template #body>
						Create professional-looking invoices, ready to send without any changes.
					</template>
				</feature-card>
				<feature-card icon="users">
					<template #title>
						User management
					</template>
					<template #body>
						Easily manage users, allowing multiple people in your company to create invoices securely.
					</template>
				</feature-card>
				<feature-card icon="stopwatch">
					<template #title>
						Super fast
					</template>
					<template #body>
						Create invoices within a minute, so you can focus on your core business.
					</template>
				</feature-card>
			</ul>
			<h2 class="pt-24 text-5xl font-semibold sm:text-7xl">
				Version comparison
			</h2>
			<p class="max-w-md">
				There are two versions of InvoiceWolf. The WolfCub version is the free version that can be used without
				an account. InvoiceWolf is the full version with more functionality.
			</p>
			<div class="w-full rounded-xl border-2 border-primary-200 p-4 sm:max-w-md dark:border-primary-700 dark:bg-transparent">
				<table class="w-full border-collapse sm:text-lg">
					<thead class="text-left">
						<tr>
							<th />
							<th>WolfCub</th>
							<th>InvoiceWolf</th>
						</tr>
					</thead>
					<table-body>
						<table-data-row>
							<table-data-cell>Free</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
						</table-data-row>
						<table-data-row>
							<table-data-cell>Professional invoices</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
						</table-data-row>
						<table-data-row>
							<table-data-cell>Export to PDF</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
						</table-data-row>
						<table-data-row>
							<table-data-cell>Save as <span class="font-mono">.iw</span></table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
						</table-data-row>
						<table-data-row>
							<table-data-cell>Autofill company details</table-data-cell>
							<table-data-cell>
								<table-feature />
							</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
						</table-data-row>
						<table-data-row>
							<table-data-cell>Autofill payment details</table-data-cell>
							<table-data-cell>
								<table-feature />
							</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
						</table-data-row>
						<table-data-row>
							<table-data-cell>Multiple users</table-data-cell>
							<table-data-cell>
								<table-feature />
							</table-data-cell>
							<table-data-cell>
								<table-feature present />
							</table-data-cell>
						</table-data-row>
					</table-body>
				</table>
			</div>

			<div class="flex flex-col items-center gap-4 text-center">
				<h2 class="mt-48 text-5xl font-bold">
					Convinced?
				</h2>
				<nuxt-link to="https://app.invoicewolf.net/">
					<pv-button
						label="Get started"
						rounded
						size="large"
						class="shadow-[0px_0px_30px_10px] shadow-primary-50 hover:shadow-primary-100 dark:shadow-primary-900 dark:hover:shadow-primary-700"
					/>
				</nuxt-link>
			</div>
		</section>
	</main>
	<footer class="flex w-full flex-col gap-8 bg-surface-0 p-10 dark:bg-surface-950">
		<div class="flex justify-center bg-surface-0 dark:bg-surface-950">
			<hr class="container border-primary-100 dark:border-primary-950">
		</div>

		<div class="mx-auto flex items-center justify-between lg:container">
			<invoice-wolf-name-logo size="large" arrangement="horizontal" class="hidden sm:block" />
			<invoice-wolf-name-logo size="normal" arrangement="horizontal" class="block sm:hidden" />

			<nuxt-link to="/privacy-policy">
				<pv-button label="Privacy Policy" link />
			</nuxt-link>
		</div>
	</footer>
</template>
