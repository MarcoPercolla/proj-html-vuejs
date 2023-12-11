<script>
import { store } from "../store.js" //state management


export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppFooter does things");
        }
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <div>
        <h1>Sono un componente 3!</h1>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>