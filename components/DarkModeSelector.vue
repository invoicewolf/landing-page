<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
	<ClientOnly>
		<span class="cursor-pointer text-primary-300 duration-300 hover:text-primary-400 dark:text-primary-500">
			<i v-if="colorMode.value === 'light'" class="pi pi-moon" style="font-size: 1.25rem; line-height: 1.75rem" @click="colorMode.preference = 'dark'" />
			<i v-else-if="colorMode.value === 'dark'" class="pi pi-sun" style="font-size: 1.25rem; line-height: 1.75rem" @click="colorMode.preference = 'light'" />
		</span>
		<template #fallback>
			<span class="cursor-pointer text-primary-300 duration-300 hover:text-primary-400 dark:text-primary-500">
				<i class="pi pi-spinner-dotted" style="font-size: 1.25rem; line-height: 1.75rem" @click="colorMode.preference = 'dark'" />
			</span>
		</template>
	</ClientOnly>
</template>
