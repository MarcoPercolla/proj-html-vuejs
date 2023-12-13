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
    align-items: center;
    width: 80%;
    margin: 3rem auto;
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
</style>