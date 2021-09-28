import Vue from 'vue';
import Vuex from 'vuex';
import { Item } from '@/interfaces/Item';
import items from '@/assets/static/items.json';
import { MutationTypes } from './mutationTypes';

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
	state: {
		items: [...items] as Item[],
	},
	mutations: {
		[MutationTypes.ADD_ITEM](state, item: Item) {
			state.items.push(item);
		},
		[MutationTypes.REMOVE_ITEM](state, id: number) {
			state.items = state.items.filter((item) => item.id !== id);
		},
		[MutationTypes.REPLACE_ITEM](state, item: Item) {
			const restItems = state.items.filter(
				(_item) => _item.id !== item.id
			);

			state.items = [...restItems, item];
		},
	},
});

export default store;
