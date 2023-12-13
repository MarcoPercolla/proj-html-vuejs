<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
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
            let indiceUltimaImg = this.catalog.length - 1;

            if (this.slideNumber > 0) {
                this.slideNumber--;
            } else {
                this.slideNumber = indiceUltimaImg;
            }
        },
        next() {
            let indiceUltimaImg = this.catalog.length - 1;

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
            <div id="carouselElement" :class="i == slideNumber ? `visible` : `invisible`" v-for="(slide, i) in catalog">

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
    width: 100%;
    height: 35rem;
    position: relative;
}

#carouselElement {
    width: 100%;
    height: 35rem;

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
    opacity: 1;
    position: absolute;
    top: 0;
    animation: ruota 1s;



}

@keyframes ruota {
    0% {
        scale: 0.9;
        top: -30%;
        opacity: 0.6;
        rotate: x 90deg;
    }

    25% {

        opacity: 0.7;

    }

    50% {
        scale: 0.7;
        opacity: 0.8;

    }

    75% {
        opacity: 0.9;

    }

    100% {
        scale: 1;
        top: 0;
        opacity: 1;

    }
}

@keyframes ruota2 {
    0% {
        scale: 0.9;
        top: 0;
        opacity: 1;
        rotate: x 55deg;

    }

    25% {

        opacity: 1;
        rotate: x 65deg;
        filter: brightness(0.6);
    }

    50% {

        scale: 0.7;
        opacity: 0.1;
        rotate: x 75deg;
        filter: brightness(0.2);


    }

    75% {
        top: 10rem;
        opacity: 0;
        rotate: x 110deg;
        filter: brightness(0);


    }

    100% {
        scale: 1;
        top: 0;
        opacity: 0;



    }
}

.invisible {
    opacity: 0;
    position: absolute;
    top: 0;
    animation: ruota2 1s;



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