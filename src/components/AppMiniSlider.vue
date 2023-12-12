<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppMiniSlider",
    data() {
        return {
            store,
            slidevisible: [0, 1, 2, 3, 4],
        }
    },
    methods: {
        doThings() {
            console.log("AppMiniSlider does things");
        },
        back() {
            if (!(this.slidevisible.includes(0))) {
                this.slidevisible.splice(4, 1);
                this.slidevisible.splice(0, 0, this.slidevisible[0] - 1)

            }


        },
        next() {
            if (!(this.slidevisible.includes(this.catalog.length - 1))) {

                this.slidevisible.push(this.slidevisible[4] + 1);
                this.slidevisible.splice(0, 1)


            }



        },
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <div class="container2">
        <div class="sponsorCard" v-for="(slide, i) in catalog" v-show="this.slidevisible.includes(i)">
            <img :src="slide.immagine" alt="">
        </div>
        <button class="btn1" @click="back()">indietro</button>
        <button class="btn2" @click="next()">avanti</button>

    </div>
</template>

<style scoped lang="scss">
.container2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 3rem auto;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
}

.sponsorCard {
    width: 20%;




    >img {
        width: 100%;
        height: 100%;

    }


}

.btn1 {
    position: absolute;
    top: 2rem;
    left: 1rem;
}

.btn2 {
    position: absolute;
    top: 2rem;
    right: 1rem;
}
</style>