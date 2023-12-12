<script>
import { store } from "../store.js" //state management
import AppBigSlider from "./AppBigSlider.vue"


export default {
    name: "AppMain",
    components: {
        AppBigSlider,

    },
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppMain does things");
        }
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <AppBigSlider />

    <section>
        <div class="container">
            <div class="pointCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                    <p>bla</p>
                </div>
            </div>
            <div class="pointCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                    <p>bla</p>
                </div>
            </div>
            <div class="pointCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                    <p>bla</p>
                </div>
            </div>
            <div class="pointCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                    <p>bla</p>
                </div>
            </div>

        </div>

    </section>



    <section>
        <div class="container">
            <img class="type1" src="" alt="">
            <img class="type1" src="" alt="">
        </div>

    </section>



    <section>
        <h2>special Category</h2>

        <div class="container">
            <img class="type2" src="" alt="">
            <img class="type2" src="" alt="">
            <img class="type2" src="" alt="">

        </div>

    </section>

    <section>
        <h2>Our Products</h2>

        <div class="container">

            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">

        </div>

    </section>

    <section>
        <div class="container">
            <img class="type1" src="" alt="">
            <img class="type1" src="" alt="">
        </div>

    </section>

    <section>
        <h2>Deal of the day</h2>

        <div class="container">

            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">

        </div>

    </section>

    <section class="fullWide"></section>

    <section>
        <h2>special Category</h2>

        <div class="container">
            <img class="type4" src="" alt="">
            <img class="type4" src="" alt="">
            <img class="type4" src="" alt="">

        </div>

    </section>

    <section>
        <div class="container">
            <div class="sponsorCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                </div>
            </div>
            <div class="sponsorCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                </div>
            </div>
            <div class="sponsorCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                </div>
            </div>
            <div class="sponsorCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                </div>
            </div>
            <div class="sponsorCard">
                <img src="" alt="">
                <div>
                    <h4>blabla</h4>
                </div>
            </div>

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

.pointCard {
    display: flex;

    >img {
        background-color: aqua;
        height: 4rem;
        width: 4rem;


    }

    >div {
        margin: 0 1rem;
    }
}

.type1 {
    width: 49.5%;
    height: 15rem;
    background-color: bisque;
}

.type2 {
    width: 32.3%;
    height: 30rem;
    background-color: bisque;
}

.type3 {
    width: 24%;
    height: 20rem;
    background-color: bisque;
}

.type4 {
    width: 32.3%;
    height: 15rem;
    background-color: bisque;
}

.fullWide {
    height: 20rem;
    background-color: red;
}

.sponsorCard {
    display: flex;
    align-items: center;

    >img {
        background-color: rgb(200, 255, 0);
        height: 3rem;
        width: 3rem;


    }

    >div {
        margin: 0 1rem;
    }
}
</style>