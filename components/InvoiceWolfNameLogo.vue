<script setup lang="ts">
defineProps<{
	size: "normal" | "large";
	arrangement: "horizontal" | "vertical";
	free?: boolean;
	noLogo?: boolean;
}>();
</script>

<template>
	<div v-if="arrangement === 'horizontal'">
		<div v-if="size === 'normal'" class="flex flex-row items-center gap-2">
			<icons-wolf v-if="!noLogo" class="size-8" css-var="--pv-primary-500" />
			<div class="flex flex-col justify-center">
				<span class="select-none text-xl font-bold">Invoice<span
					class="text-primary-500"
				>Wolf <span v-if="free" class="align-bottom text-xs">CUB</span></span></span>
			</div>
		</div>
		<div v-else-if="size === 'large'" class="flex flex-row items-center gap-2">
			<icons-wolf v-if="!noLogo" class="size-16" css-var="--pv-primary-500" />
			<div class="flex flex-col justify-center">
				<span class="select-none text-5xl font-bold">Invoice<span
					class="text-primary-500"
				>Wolf <span v-if="free" class="align-bottom text-lg">CUB</span></span></span>
			</div>
		</div>
	</div>
	<div v-else-if="arrangement === 'vertical'">
		<div v-if="size === 'normal'" class="flex flex-col items-center gap-2">
			<icons-wolf v-if="!noLogo" class="size-32" css-var="--pv-primary-500" />
			<div class="flex flex-col justify-center">
				<span class="select-none text-4xl font-bold">Invoice<span
					class="text-primary-500"
				>Wolf <span v-if="free" class="align-bottom text-xs">CUB</span></span></span>
			</div>
		</div>
		<div v-else-if="size === 'large'" class="flex flex-col items-center gap-2">
			<icons-wolf v-if="!noLogo" class="size-48" css-var="--pv-primary-500" />
			<div class="flex flex-col justify-center">
				<span class="select-none text-6xl font-bold">Invoice<span
					class="text-primary-500"
				>Wolf <span v-if="free" class="align-bottom text-xs">CUB</span></span></span>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
