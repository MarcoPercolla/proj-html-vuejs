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
                <div class="yellowBox">
                    <h3>Upcoming Stock</h3>
                </div>

                <h2>{{ slide.titolo }}</h2>
                <div class="btn1" @click="back()" id="btnBack"></div>
                <div class="btn2" @click="next()" id="btnNext"></div>



            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.jumboCarousel {
    width: 100%;
    height: 40rem;
    position: relative;
    perspective: 800px;
}

#carouselElement {
    width: 100%;
    height: 40rem;


}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;

}

.yellowBox {
    position: absolute;
    top: 10rem;
    left: 15rem;
    background-color: #f9aa01;
    padding: 0.5rem 1rem;
    transform: skew(20deg);
    color: black;
}

h3 {

    font-size: 1.7rem;
    transform: skew(-20deg);

    background-color: #f9aa01;
    padding: 0.5rem 1rem;

}

h2 {
    position: absolute;
    font-size: 3rem;
    top: 15rem;
    left: 15rem;
}

.visible {
    opacity: 1;
    position: absolute;
    top: 0;
    animation: ruota 1.5s;



}

@keyframes ruota {
    0% {
        scale: 0.9;
        top: -30%;
        opacity: 0.6;
        // rotate: x 90deg;
        transform: rotate3d(1, 0, 0, 90deg);
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
        top: 3rem;
        opacity: 1;

    }

    25% {
        scale: 0.7;
        opacity: 1;
        // transform: rotate3d(1, 0, 0, 65deg);
        filter: brightness(0.6);

    }

    50% {
        scale: 0.5;
        opacity: 0;
        // transform: rotate3d(1, 0, 0, 75deg);



        top: 9rem;

    }

    75% {

        opacity: 0;
        // transform: rotate3d(1, 0, 0, 110deg);
        transform: rotate3d(1, 0, 0, -90deg);




    }





    100% {
        scale: 1;

        opacity: 0;


    }
}

.invisible {
    opacity: 0;
    position: absolute;
    top: 0;
    animation: ruota2 1.5s;



}



.btn1 {
    width: 2rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-image: url(public/immagini/arrow.png);
    background-position: bottom left;
    position: absolute;
    top: 20rem;
    left: 10rem;

    &:hover {
        background-position: top left;
    }
}

.btn2 {
    width: 2rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-image: url(public/immagini/arrow.png);
    background-position: bottom right;
    position: absolute;
    top: 20rem;
    right: 10rem;

    &:hover {
        background-position: top right;
    }
}
</style>