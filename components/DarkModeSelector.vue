<script setup lang="ts">
const colorMode = useColorMode();

function toggleColorMode(val: boolean) {
	if (val) {
		colorMode.preference = "dark";
	}
	else {
		colorMode.preference = "light";
	}
}
</script>

<template>
	<div class="flex flex-row items-center gap-2">
		<i class="pi pi-sun" />
		<pv-toggle-switch
			:model-value="colorMode.value === 'dark'"
			binary
			@update:model-value="(val) => toggleColorMode(val)"
		/>
		<i class="pi pi-moon" />
	</div>
</template>

<style scoped>

</style>
