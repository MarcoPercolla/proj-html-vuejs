<script>
import AppComponent from "./components/AppPricedSlider.vue"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"



import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent,
		AppHeader,
		AppMain,
		AppFooter,

	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.doThings();

	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<AppHeader :catalog="store.headerArray" />
	<main>
		<AppMain />
	</main>
	<AppFooter :catalog="store.footerArray" />
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
main {
	background-image: url(../public/immagini/body-bg.jpg);
	background-size: cover;


}
</style>