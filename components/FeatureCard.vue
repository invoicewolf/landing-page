<script setup lang="ts">
defineProps<{
	icon: string;
}>();
</script>

<template>
	<li class="flex w-full flex-col justify-center gap-4 rounded-xl border-2 border-primary-200 bg-primary-50 p-4 shadow-lg shadow-primary-100 dark:border-primary-700 dark:bg-primary-950 dark:shadow-primary-950">
		<i :class="`pi pi-${icon}`" style="font-size: 2.25rem; line-height: 2.5rem" />
		<h2 class="text-xl font-semibold">
			<slot name="title" />
		</h2>
		<p>
			<slot name="body" />
		</p>
	</li>
</template>
