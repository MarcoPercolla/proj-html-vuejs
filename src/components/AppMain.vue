<script>
import { store } from "../store.js" //state management
import AppBigSlider from "./AppBigSlider.vue"
import AppDoubleBanner from "./AppDoubleBanner.vue"
import AppTripleBanner from "./AppTripleBanner.vue"
import AppMiniSlider from "./AppMiniSlider.vue"
import AppPortfolioSlider from "./AppPortfolioSlider.vue"




export default {
    name: "AppMain",
    components: {
        AppBigSlider,
        AppDoubleBanner,
        AppDoubleBanner,
        AppTripleBanner,
        AppMiniSlider,
        AppPortfolioSlider,

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
    <AppBigSlider :catalog="store.slides1" />

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



    <AppDoubleBanner :catalog="store.slides2" />



    <section>
        <h2>special Category</h2>

        <AppTripleBanner :catalog="store.slides3" />


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

    <AppDoubleBanner :catalog="store.slides5" />

    <section>
        <h2>Deal of the day</h2>

        <div class="container">

            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">
            <img class="type3" src="" alt="">

        </div>

    </section>

    <section class="fullWide">
        <AppPortfolioSlider :catalog="store.slides6" />
    </section>

    <section>
        <h2>special Category</h2>

        <div class="container">
            <img class="type4" src="" alt="">
            <img class="type4" src="" alt="">
            <img class="type4" src="" alt="">

        </div>

    </section>

    <section>
        <AppMiniSlider :catalog="store.slides8" />
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
    height: 30rem;
    background: url('public/immagini/parallax.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    padding: 3rem;
}
</style>