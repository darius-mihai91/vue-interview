<template>
	<div v-if="item" class="mt-3" @submit.prevent="submitForm">
		<h3 class="d-flex">Edit item : {{ item.name }}</h3>
		<form class="d-flex flex-column mt-3 edit-form">
			<div class="form-group mb-2 d-inline-flex">
				<label class="mx-2">Name: </label>
				<input type="text" v-model="item.name" />
			</div>
			<div class="form-group mb-2 d-inline-flex">
				<label class="mx-2">Code: </label>
				<input type="text" v-model="item.code" />
			</div>
			<div class="form-group d-inline-flex mb-2">
				<label class="mx-2">Description: </label>
				<input type="text" v-model="item.description" />
			</div>
			<div class="form-group d-inline-flex">
				<label class="mx-2">Active: </label>
				<input type="checkbox" v-model="item.active" />
			</div>
			<div class="mt-3 d-flex">
				<button class="btn btn-primary col-1">Save</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Item } from '@/interfaces/Item';
import { MutationTypes } from '@/store/mutationTypes';

export default Vue.extend({
	name: 'Edit',
	computed: {
		id() {
			const id = this.$route.params['id'];
			return id ? parseInt(id) : null;
		},
		items() {
			return this.$store.state.items;
		},
	},
	data() {
		return {
			item: null as Item | null,
		};
	},
	mounted() {
		if (this.id) {
			this.item = this.items.find((item: Item) => item.id === this.id);
		} else {
			this.item = {
				id: this.items.length + 1,
				name: '',
				code: '',
				description: '',
				active: false,
			};
		}
	},
	methods: {
		submitForm() {
			if (!this.id) {
				this.$store.commit(MutationTypes.ADD_ITEM, this.item);
			} else {
				this.$store.commit(MutationTypes.REPLACE_ITEM, this.item);
			}
			this.$router.push('/first-page');
		},
	},
});
</script>

<style lang="scss" scoped>
.edit-form {
	box-shadow: 1px 3px 10px 1px #9a9494;
	padding: 20px;
}
</style>
