<template>
	<div class="container flex-container mt-5">
		<div class="left-sidebar py-3">
			<slot name="left"></slot>
		</div>
		<div class="right-content">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Sidebar',
});
</script>

<style lang="scss" scoped>
.flex-container {
	display: flex;
	box-shadow: 1px 3px 10px 1px #9a9494;
	min-height: 50vh;
}
.left-sidebar {
	align-self: left;
	border-right: 1px solid #000;
	min-width: 300px;
	flex-direction: column;
}
.right-content {
	align-self: right;
}
</style>
