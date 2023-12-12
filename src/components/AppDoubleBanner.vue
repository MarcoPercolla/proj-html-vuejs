<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppDoubleBanner does things");
        }
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div v-for="elements in catalog">
                <img class="type1" :src="elements.immagine" alt="">
                <h3>{{ elements.titolo }}</h3>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 3rem auto;

    >div {
        width: 49.5%;
        height: 15rem;
        position: relative
    }
}

.type1 {
    width: 100%;
    object-fit: cover;
}

h3 {
    position: absolute;
    top: 45%;
    right: 2rem;
}
</style>