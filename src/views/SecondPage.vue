<template>
	<Sidebar>
		<template v-slot:left>
			<SecondPageMenu />
		</template>
		<template v-slot:right>
			<div class="p-5">
				Default
			</div>
		</template>
	</Sidebar>
</template>

<script lang="ts">
import Vue from 'vue';
import SecondPageMenu from '@/components/SecondPageMenu.vue';
export default Vue.extend({
	components: {
		SecondPageMenu,
	},
});
</script>
