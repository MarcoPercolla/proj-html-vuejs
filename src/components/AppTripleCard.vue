<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppTripleCard",
    data() {
        return {
            store,
            slidevisible: [0, 1, 2],
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        },
        back() {
            if (!(this.slidevisible.includes(0))) {
                this.slidevisible.splice(2, 1);
                this.slidevisible.splice(0, 0, this.slidevisible[0] - 1)

            } else {

                this.slidevisible = [(this.catalog.length - 3), (this.catalog.length - 2), (this.catalog.length - 1)];

            }


        },
        next() {
            if (!(this.slidevisible.includes(this.catalog.length - 1))) {

                this.slidevisible.push(this.slidevisible[2] + 1);
                this.slidevisible.splice(0, 1)


            } else {
                this.slidevisible = [0, 1, 2];


            }



        },
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <section>
        <h2>New Game Blog</h2>

        <div class="container">
            <div class="card" v-for="(slide, i) in catalog"
                :class="this.slidevisible.includes(i) ? `visible` : `invisible`">
                <img class="type4" :src="slide.immagine" alt="">
                <div class="info">
                    <img src="" alt="">
                    <p>{{ slide.data }}</p>
                    <img src="" alt="">
                    <p>{{ slide.commenti }} comment </p>

                </div>
                <h4>{{ slide.descrizione }}</h4>

            </div>
            <button class="btn1" @click="back()">indietro</button>
            <button class="btn2" @click="next()">avanti</button>



        </div>

    </section>
</template>

<style scoped lang="scss">
section {
    text-align: center;

}

.container {
    display: flex;
    justify-content: space-between;

    width: 80%;
    margin: 3rem auto;
    position: relative;
}

.card {
    width: 32.3%;

}

.type4 {
    width: 100%;
    height: 15rem;
    background-color: bisque;
}

.visible {
    transition: 1s;
    opacity: 1;
}

.invisible {
    opacity: 0;
    position: absolute;

}

.btn1 {
    position: absolute;
    top: 6.5rem;
    left: -4rem;
}

.btn2 {
    position: absolute;
    top: 6.5rem;
    right: -4rem;
}

.info {
    height: 1.5rem;
    margin: 0.4rem 0;
    display: flex;
    align-items: center;

    img {
        background-color: red;
        height: 100%;
        aspect-ratio: 1 / 1;
        margin: 0 0.3rem;
    }

}
</style>