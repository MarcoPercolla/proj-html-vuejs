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
                <div class="animation"></div>
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

.animation {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0);

    background: linear-gradient(123deg, #9d9d9d00 0%, rgba(255, 255, 255, 1) 50%, transparent 100%);
    z-index: 2;
    width: 100%;
    height: 18.1rem;
    opacity: 0;
    animation: scorri2 1s;


    &:hover {
        animation: scorri 1s;
    }

}

h3 {
    position: absolute;
    top: 45%;
    right: 2rem;
}

@keyframes scorri {
    0% {

        opacity: 0.2;
        right: -3rem;


    }

    90% {
        opacity: 0.1;
        transform: translate3d(100%, 0, 0);
        width: 0;


    }

    100% {
        opacity: 0;
        left: 0;
        width: 0;


    }
}

@keyframes scorri2 {
    0% {

        opacity: 0.4;


    }

    90% {
        opacity: 0.1;
        transform: translate3d(100%, 0, 0);
        width: 0;


    }

    100% {
        opacity: 0;
        left: 0;
        width: 0;


    }
}
</style>