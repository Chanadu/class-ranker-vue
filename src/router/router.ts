import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import VoteView from '../views/VoteView.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/class-ranker',
			name: 'base',
			children: [
				{
					path: '',
					name: 'home',
					component: HomeView,
				},
				{
					path: 'vote',
					name: 'vote',
					component: VoteView,
				},
			],
		},
	],
});

export default router;
