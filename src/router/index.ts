import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/first-page',
		name: 'First page',
		component: () =>
			import(
				/* webpackChunkName: "FirstPage" */ '../views/FirstPage.vue'
			),
	},
	{
		path: '/second-page',
		component: () =>
			import(
				/* webpackChunkName: "SecondPage" */ '../views/SecondPage.vue'
			),
	},
	{
		path: '/items/edit/:id',
		component: () =>
			import(/* webpackChunkName: "Edit" */ '../components/Edit.vue'),
	},
	{
		path: '/items/new',
		component: () =>
			import(/* webpackChunkName: "Edit" */ '../components/Edit.vue'),
	},
	{
		path: '/pageB1',
		component: () =>
			import(/* webpackChunkName: "PageB1" */ '../views/PageB1.vue'),
	},
	{
		path: '/pageB2',
		component: () =>
			import(/* webpackChunkName: "PageB2" */ '../views/PageB2.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
