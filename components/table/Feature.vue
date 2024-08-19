<script setup lang="ts">
defineProps<{
	present?: boolean;
}>();
</script>

<template>
	<i v-if="present" class="pi pi-check text-primary-500" />
	<i v-else class="pi pi-times text-surface-500" />
</template>

<style scoped>

</style>
