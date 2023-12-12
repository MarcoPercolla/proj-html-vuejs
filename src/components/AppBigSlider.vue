<script>
import { store } from "../store.js" //state management


export default {
    name: "AppBigSlider",
    data() {
        return {
            store,
            slideNumber: 0,
        }
    },
    methods: {
        doThings() {
            console.log("AppBigSlider does things");
        },
        back() {
            let indiceUltimaImg = store.slides1.length - 1;

            if (this.slideNumber > 0) {
                this.slideNumber--;
            } else {
                this.slideNumber = indiceUltimaImg;
            }
        },
        next() {
            let indiceUltimaImg = store.slides1.length - 1;

            if (this.slideNumber < indiceUltimaImg) {
                this.slideNumber++;
            } else {
                this.slideNumber = 0;
            }
        },
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <div>
        <div class="jumboCarousel">
            <div id="carouselElement" :class="i == slideNumber ? `visible` : `invisible`"
                v-for="(slide, i) in store.slides1">

                <img :src="slide.immagine" alt="">
                <h2>{{ slide.titolo }}</h2>
                <button class="btn1" @click="back()">indietro</button>
                <button class="btn2" @click="next()">avanti</button>



            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.jumboCarousel {
    width: 99%;
    height: 35rem;
    background-color: aqua;
}

#carouselElement {
    width: 100%;
    height: 35rem;
    position: relative;
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;

}

h2 {
    position: absolute;
    top: 15rem;
    left: 15rem;
}

.visible {
    display: block;
}

.invisible {
    display: none;
}

.btn1 {
    position: absolute;
    top: 20rem;
    left: 10rem;
}

.btn2 {
    position: absolute;
    top: 20rem;
    right: 10rem;
}
</style>