<template>
	<div class="flex justify-around items-center">
		<VoteCard class="hover:bg-cyan-700">1</VoteCard>
		<div class="w-32 h-32"></div>
		<VoteCard class="hover:bg-cyan-700">2</VoteCard>
	</div>
</template>

<script setup lang="ts">
	import VoteCard from '../components/VoteView/VoteCard.vue';
</script>

<style scoped></style>
