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
        <img class="userimage" :src="slide.immagine" alt="">
        <div class="iconimage"><img src="public/immagini/quote.png" alt=""></div>
        <h4>{{ slide.titolo }}</h4>
        <h5>{{ slide.descrizione }}</h5>
    </div>
    <div>
        <div class="choser" v-for="(slide, i) in catalog" @click="chose(i)" :class="i == currentSlide ? `current` : ``">

        </div>

    </div>
</template>

<style scoped lang="scss">
.userimage {
    border-radius: 50%;
    border: solid 2px orange;
    object-position: center;

}

.iconimage {
    border-radius: 50%;
    background-color: #f9aa01;
    object-position: center;
    object-fit: contain;
    width: 2rem;
    height: 2rem;
    padding-top: 0.4rem;
    position: relative;
    left: 45%;
    top: -7rem;



    >img {
        width: 50%;

    }
}

h4 {
    margin: 0.5rem
}

.visible {
    margin: 3rem 0;
    display: block;

}

.invisible {
    display: none;
}

.choser {
    border-radius: 50%;
    background-color: rgb(17, 63, 103);
    width: 1rem;
    height: 1rem;
    display: inline-block;
    margin: 0.5rem;

}

.current {
    scale: 1.4;
    background-color: #f9aa01;
    transition: 1s;
}

// display: inline;
// margin: 0.5rem;
// width: 1rem;
// height: 1rem;

// border-radius: 50%;
// background-color: rgb(17, 63, 103);
</style>