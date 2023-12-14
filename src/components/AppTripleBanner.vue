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
            <div class="animation"></div>
            <div class="title">
                <h3>{{ slide.titolo }}</h3>

            </div>


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
    position: relative;

    >.title {
        position: absolute;
        bottom: 0;
        height: 5rem;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.384);
        padding: 1rem 0.5rem;
        text-align: left;

    }


}

.type2 {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.animation {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgb(157, 157, 157);
    opacity: 0;

    &:hover {
        animation: open 1s;
    }


}

@keyframes open {
    0% {
        opacity: 0.4;
        top: 50%;
        height: 0%;
    }

    70% {
        height: 100%;
        top: 0;
        opacity: 0.1;
    }

    100% {
        top: 0;

        opacity: 0;
    }
}
</style>