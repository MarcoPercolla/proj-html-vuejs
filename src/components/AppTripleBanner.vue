<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppTripleBanner",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppTripleBanner does things");
        }
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <div class="container">
        <div class="card" v-for="slide in catalog">
            <img class="type2" :src="slide.immagine" alt="">

        </div>

    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 3rem auto;
}

.card {
    width: 32.3%;
    height: 30rem;


}

.type2 {
    width: 100%;
    height: 100%;
    object-fit: cover;

}
</style>