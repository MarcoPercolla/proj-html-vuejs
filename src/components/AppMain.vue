<script>
import { store } from "../store.js" //state management
import AppBigSlider from "./AppBigSlider.vue"
import AppDoubleBanner from "./AppDoubleBanner.vue"
import AppTripleBanner from "./AppTripleBanner.vue"
import AppMiniSlider from "./AppMiniSlider.vue"
import AppPortfolioSlider from "./AppPortfolioSlider.vue"
import AppTripleCard from "./AppTripleCard.vue"
import AppPricedSlider from "./AppPricedSlider.vue"




export default {
    name: "AppMain",
    components: {
        AppBigSlider,
        AppDoubleBanner,
        AppDoubleBanner,
        AppTripleBanner,
        AppMiniSlider,
        AppPortfolioSlider,
        AppTripleCard,
        AppPricedSlider

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
                <div class="falseImage imageCard"></div>
                <div>
                    <h4>Free Delivery</h4>
                    <p>Free Shipping On All Order</p>
                </div>
            </div>
            <div class="pointCard">
                <div class="falseImage2 imageCard"></div>
                <div>
                    <h4>Money Return</h4>
                    <p>Back Guarantee in 7 days</p>
                </div>
            </div>
            <div class="pointCard">
                <div class="falseImage3 imageCard"></div>
                <div>
                    <h4>Member Discount</h4>
                    <p>On every order over $130.00</p>
                </div>
            </div>
            <div class="pointCard">
                <div class="falseImage4 imageCard"></div>
                <div>
                    <h4>Return Policy</h4>
                    <p>Support 24 hours a day</p>
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

        <AppPricedSlider :catalog="store.slides4" />

    </section>

    <AppDoubleBanner :catalog="store.slides5" />

    <section>
        <h2>Deal of the day</h2>

        <AppPricedSlider :catalog="store.slides4" />

    </section>

    <section class="fullWide">
        <AppPortfolioSlider :catalog="store.slides6" />
    </section>

    <AppTripleCard :catalog="store.slides7" />

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
    text-align: left;
}

.imageCard {
    width: 3rem;
    height: 2.4rem;
    margin: 0 1rem;
}

.falseImage {
    background-image: url(public/immagini/service-icon.png);
    background-position: top -113px right;
    object-fit: cover;

    &:hover {
        background-position: top right;

        transition: 0.6s;
    }
}

.falseImage2 {
    background-image: url(public/immagini/service-icon.png);
    background-position: top -338px right;

    &:hover {
        background-position: top -225px right;
        transition: 0.6s;

    }
}

.falseImage3 {
    background-image: url(public/immagini/service-icon.png);
    background-position: top -564px right;

    &:hover {
        background-position: top -451px right;
        transition: 0.6s;

    }
}

.falseImage4 {
    background-image: url(public/immagini/service-icon.png);
    background-position: top -786px right;

    &:hover {
        background-position: top -673px right;
        transition: 0.6s;

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