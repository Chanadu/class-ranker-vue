<template>
	<div
		class="w-96 h-96 flex justify-center items-center border rounded-2xl select-none hover:bg-cyan-700 transition-all duration-150"
		@click="i++">
		<slot></slot>
		<span class="">{{ i }}</span>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	let i = ref(0);
</script>

<style scoped></style>
