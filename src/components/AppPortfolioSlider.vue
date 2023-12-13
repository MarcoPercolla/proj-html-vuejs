<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppPortfolioSlider",
    data() {
        return {
            store,
            currentSlide: 0,
        }
    },
    methods: {
        doThings() {
            console.log("AppPortfolio does things");
        },
        chose(n) {
            this.currentSlide = n;
        },
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <div v-for="(slide, i) in catalog" :class="i == currentSlide ? `visible` : `invisible`">
        <img :src="slide.immagine" alt="">
        <h4>{{ slide.titolo }}</h4>
        <h5>{{ slide.descrizione }}</h5>
    </div>
    <div>
        <button class="choser" v-for="(slide, i) in catalog" @click="chose(i)"> {{ i }} </button>

    </div>
</template>

<style scoped lang="scss">
img {
    border-radius: 50%;
    border: solid 2px orange;
    object-position: center;
}

h4 {
    margin: 2rem
}

.visible {
    margin: 3rem 0;
    display: block;
}

.invisible {
    display: none;
}

.choser {
    margin: 0.5rem;

}
</style>