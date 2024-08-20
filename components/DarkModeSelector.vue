<script setup lang="ts">
const colorMode = useColorMode();

const cookie = useCookie("theme", { expires: new Date(new Date().setFullYear(3000)), domain: "invoicewolf.net" });

if (cookie.value) {
	if (cookie.value === "dark") {
		setDark();
		colorMode.value = "dark";
	}
	else {
		setLight();
		colorMode.value = "light";
	}
}

function setDark() {
	cookie.value = "dark";
	colorMode.preference = "dark";
}

function setLight() {
	cookie.value = "light";
	colorMode.preference = "light";
}
</script>

<template>
	<ClientOnly>
		<span class="cursor-pointer text-primary-300 duration-300 hover:text-primary-400 dark:text-primary-500">
			<i v-if="colorMode.value === 'light'" class="pi pi-moon" style="font-size: 1.25rem; line-height: 1.75rem" @click="setDark" />
			<i v-else-if="colorMode.value === 'dark'" class="pi pi-sun" style="font-size: 1.25rem; line-height: 1.75rem" @click="setLight" />
		</span>
	</ClientOnly>
</template>
