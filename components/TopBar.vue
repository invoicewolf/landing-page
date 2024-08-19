<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";
import DarkModeSelector from "@/components/DarkModeSelector.vue";
import InvoiceWolfNameLogo from "@/components/InvoiceWolfNameLogo.vue";

const menubarItems = ref<MenuItem[]>([]);
</script>

<template>
	<nav>
		<pv-menubar
			:model="menubarItems"
			:pt="{
				root: {
					class: 'rounded-none border-0 bg-surface-0 dark:bg-surface-950 p-6',
				},
				item: {
					class: 'z-10',
				},
			}"
		>
			<template #start>
				<nuxt-link to="/">
					<InvoiceWolfNameLogo arrangement="horizontal" size="normal" />
				</nuxt-link>
			</template>
			<template #item="{ item, props, hasSubmenu }">
				<nuxt-link v-if="item.route" :to="item.route" active-class="text-primary-500" class="font-medium">
					<a v-bind="props.action">
						<span>{{ item.label }}</span>
					</a>
				</nuxt-link>
				<a
					v-else :href="item.url" :target="item.target" v-bind="props.action" class="font-medium"
				>
					<span>{{ item.label }}</span>
					<span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
				</a>
			</template>
			<template #end>
				<DarkModeSelector />
			</template>
		</pv-menubar>
	</nav>
</template>

<style scoped>

</style>
