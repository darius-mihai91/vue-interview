import Vue from 'vue';
import App from './App.vue';
import './assets/styles.scss';
import router from './router';
import store from './store';
import Sidebar from './layouts/Sidebar.vue';

Vue.config.productionTip = false;

Vue.component('Sidebar', Sidebar);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
