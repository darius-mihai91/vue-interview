<template>
	<div v-show="show" :transition="transition">
		<div class="modal" @click.self="clickMask" role="dialog">
			<div class="modal-dialog" :class="modalClass">
				<div class="modal-content">
					<!--Header-->
					<div class="modal-header">
						<slot name="header">
							<h4 class="modal-title">
								<slot name="header">
									{{ title }}
								</slot>
							</h4>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
								@click="cancel"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</slot>
					</div>
					<!--Container-->
					<div class="modal-body">
						<slot name="body"></slot>
					</div>
					<!--Footer-->
					<div class="modal-footer">
						<slot name="footer">
							<button
								type="button"
								:class="cancelClass"
								@click="cancel"
							>
								{{ cancelText }}
							</button>
							<button type="button" :class="okClass" @click="ok">
								{{ okText }}
							</button>
						</slot>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-backdrop in"></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Modal',
	props: {
		show: {
			type: Boolean,
		},
		size: {
			type: String,
			default: 'medium',
			validator: (val) => ['small', 'large', 'medium'].includes(val),
		},
		title: {
			type: String,
			default: 'Modal',
		},
		transition: {
			type: String,
			default: 'modal',
		},
		okText: {
			type: String,
			default: 'OK',
		},
		cancelText: {
			type: String,
			default: 'Cancel',
		},
		okClass: {
			type: String,
			default: 'btn btn-primary',
		},
		cancelClass: {
			type: String,
			default: 'btn btn-secondary',
		},
		closeWhenOK: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		modalClass() {
			return {
				'modal-sm': this.size === 'small',
				'modal-md': this.size === 'medium',
				'modal-lg': this.size === 'large',
			};
		},
	},
	beforeDestroy() {
		document.body.className = document.body.className.replace(
			/\s?modal-open/,
			''
		);
	},
	methods: {
		ok() {
			this.$emit('ok');
		},
		cancel() {
			this.$emit('cancel');
		},
	},
});
</script>

<style lang="scss" scoped>
.modal {
	display: block;

	button.close {
		padding: 0;
		background-color: transparent;
		border: 0;
		font-size: 1.5rem;
	}
}

.modal-transition {
	transition: all 0.6s ease;
}

.modal-leave {
	border-radius: 1px !important;
}

.modal-transition .modal-dialog,
.modal-transition .modal-backdrop {
	transition: all 0.5s ease;
}

.modal-enter .modal-dialog,
.modal-leave .modal-dialog {
	opacity: 0;
	transform: translateY(-30%);
}

.modal-enter .modal-backdrop,
.modal-leave .modal-backdrop {
	opacity: 0;
}

.modal-backdrop {
	opacity: 0.75;
}
</style>
