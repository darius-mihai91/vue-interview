<template>
	<div id="app">
		<div id="nav" class="text-center">
			<router-link
				class="btn btn-outline-secondary btn-link mx-5"
				to="/first-page"
				>Comp A</router-link
			>
			<router-link
				class="btn btn-outline-secondary btn-link"
				to="/second-page"
				>Comp B</router-link
			>
		</div>
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss" scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 10px;
	border: 1px solid rgb(56, 56, 56);
	box-shadow: 1px 3px 10px 1px #9a9494;
	border-radius: 10px;
	margin: 10px;
}

#nav a {
	font-weight: bold;
	color: #021f30;

	&:hover {
		opacity: 0.75;
		color: #000;
		background: transparent;
	}
}

#nav a.router-link-exact-active {
	color: #4279b9;
}
</style>
