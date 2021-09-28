<template>
	<div class="container">
		<table>
			<thead>
				<th>
					Code
				</th>
				<th>
					Name
				</th>
				<th>
					Description
				</th>
				<th>
					Active
				</th>
			</thead>
			<tbody>
				<tr v-for="item in items" :key="item.id">
					<td>{{ item.code }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.description }}</td>
					<td><input type="checkbox" :checked="item.active" /></td>
					<td class="actions-btn">
						<a
							class="action text-primary"
							@click="setViewItem(item)"
							>View</a
						>
						<a class="action text-warning" @click="editItem(item)"
							>Edit</a
						>
						<a
							class="action text-danger"
							@click="setItemToBeDeleted(item)"
							>Delete</a
						>
					</td>
				</tr>
				<button
					class="btn btn-primary mx-5 my-3 col-9"
					@click="createNewItem"
				>
					Add
				</button>
			</tbody>
		</table>
		<Modal
			name="view-item"
			:title="`View ${modals.viewItem.item.name} item`"
			v-if="modals.viewItem.item"
			:show="modals.viewItem.show"
			@cancel="modals.viewItem.show = false"
			@ok="modals.viewItem.show = false"
		>
			<template v-slot:body>
				<p>Name: {{ modals.viewItem.item.name }}</p>
				<p>Code: {{ modals.viewItem.item.code }}</p>
				<p>Description: {{ modals.viewItem.item.description }}</p>
				Active:
				<input type="checkbox" :checked="modals.viewItem.item.active" />
			</template>
		</Modal>
		<Modal
			title="Confirm delete item"
			name="confirmation-dialog"
			:show="modals.deleteConfirmation.show"
			@cancel="modals.deleteConfirmation.show = false"
			@ok="modals.deleteConfirmation.show = false"
		>
			<template v-slot:body>
				<strong>Are you sure you want to delete this item?</strong>
			</template>
			<template v-slot:footer>
				<button
					class="btn btn-danger"
					@click="deleteItem(modals.deleteConfirmation.item)"
				>
					Confirm
				</button>
				<button
					class="btn btn-primary"
					@click="modals.deleteConfirmation.show = false"
				>
					Cancel
				</button>
			</template>
		</Modal>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Modal from '../components/Modal.vue';
import { Item } from '../interfaces/Item';
import { MutationTypes } from '@/store/mutationTypes';
import orderBy from 'lodash/orderBy';

export default Vue.extend({
	name: 'FirstComponent',
	components: { Modal },
	computed: {
		items(): Item[] {
			return orderBy(this.$store.state.items, 'code');
		},
	},
	data() {
		return {
			modals: {
				viewItem: {
					show: false,
					item: null as Item | null,
				},
				deleteConfirmation: {
					show: false,
					item: null as Item | null,
				},
			},
		};
	},
	methods: {
		setViewItem(item: Item) {
			this.modals.viewItem = {
				show: true,
				item,
			};
		},
		setItemToBeDeleted(item: Item) {
			this.modals.deleteConfirmation = {
				show: true,
				item,
			};
		},
		deleteItem(item: Item | null) {
			if (!item) return;
			this.$store.commit(MutationTypes.REMOVE_ITEM, item.id);
			this.hideConfirmationModal();
		},
		hideConfirmationModal() {
			this.modals.deleteConfirmation.show = false;
		},
		editItem(item: Item) {
			this.$router.push(`/items/edit/${item.id}`);
		},
		createNewItem() {
			this.$router.push(`/items/new`);
		},
	},
});
</script>

<style lang="scss" scoped>
$border-color: #9b9b9b;

table {
	box-shadow: 1px 3px 10px 1px #9a9494;
	margin-top: 3rem;
	thead {
		border: 1px solid $border-color;
		border-radius: 3px;
		border-top: none;
		border-left: none;

		th {
			padding: 10px 50px;
		}
	}

	tbody {
		border: 1px solid $border-color;
		border-top: none;
		border-left: none;

		tr {
			border-bottom: 1px solid $border-color;
			td {
				padding: 12px;

				.action {
					cursor: pointer;
					margin-right: 5px;
					text-decoration: none;
				}
			}
		}
	}
}
</style>
