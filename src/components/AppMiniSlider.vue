<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppMiniSlider",
    data() {
        return {
            store,
            // --variabile per gestione slide visibili(valori in array == i in v-for)
            slidevisible: [0, 1, 2, 3, 4],
        }
    },
    methods: {
        doThings() {
            console.log("AppMiniSlider does things");
        },
        // --metodi per controllo variabile slidevisible
        back() {
            if (!(this.slidevisible.includes(0))) {
                this.slidevisible.splice(4, 1);
                this.slidevisible.splice(0, 0, this.slidevisible[0] - 1)

            } else {

                this.slidevisible = [(this.catalog.length - 5), (this.catalog.length - 4), (this.catalog.length - 3), (this.catalog.length - 2), (this.catalog.length - 1)];

            }


        },
        next() {
            if (!(this.slidevisible.includes(this.catalog.length - 1))) {

                this.slidevisible.push(this.slidevisible[4] + 1);
                this.slidevisible.splice(0, 1)


            } else {
                this.slidevisible = [0, 1, 2, 3, 4];


            }



        },
    },
    mounted() {

        this.doThings();
        setInterval(this.next, 8000)
    }
}
</script>

<template>
    <div class="container2">
        <div class="sponsorCard" v-for="(slide, i) in catalog"
            :class="this.slidevisible.includes(i) ? `visible` : `invisible`">
            <img :src="slide.immagine" alt="">
        </div>
        <div class="btn1" @click="back()" id="btnBack"></div>
        <div class="btn2" @click="next()" id="btnNext"></div>

    </div>
</template>

<style scoped lang="scss">
.container2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 10%;
    margin: 3rem auto;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
}

.sponsorCard {
    width: 20%;
    height: 7rem;


    >img {
        width: 80%;


    }


}

.btn1 {
    width: 2rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-image: url(public/immagini/arrow.png);
    background-position: bottom left;
    position: absolute;
    top: 6.5rem;
    left: 6rem;

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
    top: 6.5rem;
    right: 6rem;

    &:hover {
        background-position: top right;
    }
}

.visible {
    transition: 1s;
    opacity: 1;
}

.invisible {
    opacity: 0;
    position: absolute;

}
</style>