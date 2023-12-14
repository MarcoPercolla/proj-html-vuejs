<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppPricedSlider",
    data() {
        return {
            store,
            // --variabile per controllo slide correnti
            slidevisible: [0, 1, 2, 3],
        }
    },
    methods: {
        // --metodi per controllo slide correnti
        back() {
            if (!(this.slidevisible.includes(0))) {
                this.slidevisible.splice(3, 1);
                this.slidevisible.splice(0, 0, this.slidevisible[0] - 1)

            } else {

                this.slidevisible = [(this.catalog.length - 4), (this.catalog.length - 3), (this.catalog.length - 2), (this.catalog.length - 1)];

            }


        },
        next() {
            if (!(this.slidevisible.includes(this.catalog.length - 1))) {

                this.slidevisible.push(this.slidevisible[3] + 1);
                this.slidevisible.splice(0, 1)


            } else {
                this.slidevisible = [0, 1, 2, 3];


            }



        },

    },
    mounted() {
        setInterval(this.next, 8000)


    }
}
</script>

<template>
    <div class="container">
        <div class="type3" v-for="(slide, i) in catalog" :class="this.slidevisible.includes(i) ? `visible` : `invisible`">
            <img class="front" :src="slide.immagine" alt="">
            <img class="back" :src="slide.immagine2" alt="">
            <div>
                <span class="star" v-for="star in slide.vote"><font-awesome-icon icon="fa-solid fa-star" /></span>
                <span class="star2" v-for="star in (5 - slide.vote)"><font-awesome-icon icon="fa-solid fa-star" /></span>
                <h3>{{ slide.name }}</h3>
                <h5>{{ slide.prezzo }}$</h5>
                <div class="comandCaller">
                    <div class="action"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></div>
                    <div class="action"><font-awesome-icon icon="fa-solid fa-heart" /></div>
                    <div class="action"><font-awesome-icon icon="fa-solid fa-maximize" /></div>
                    <div class="action"><font-awesome-icon icon="fa-solid fa-eye" /></div>
                </div>
            </div>




        </div>
        <div class="btn1" @click="back()" id="btnBack"></div>
        <div class="btn2" @click="next()" id="btnNext"></div>




    </div>
</template>

<style scoped lang="scss">
.type3 {
    width: 24%;
    background-color: rgba(0, 0, 0, 0.31);
    position: relative;




    >div {
        padding: 0.5rem;
        color: white;
        text-align: left;
        position: relative;

        >.star {
            color: #f9aa01;
        }

        >.star2 {
            color: grey;
        }

        h5 {
            margin: 0.3rem 0;
        }

        h3 {
            margin: 0.5rem 0;
        }

        >.comandCaller {
            position: absolute;
            top: 0;
            width: 100%;
            right: 0;
            height: 100%;

            opacity: 0;
            z-index: 4;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            &:hover {
                opacity: 1;
                transition: 1s;
            }

            >.action {
                width: 24.7%;
                height: 1.8rem;
                background-color: rgb(0, 0, 0);
                text-align: center;
                padding: 0.4rem 0;

                &:hover {
                    color: #f9aa01
                }
            }
        }


    }


}



.front {
    width: 100%;
    height: 16rem;
}

.back {
    width: 100%;
    height: 16rem;
    opacity: 0;
    z-index: 3;
    position: absolute;
    left: 0;

    &:hover {
        opacity: 1;
        transition: 1s;
    }

}


.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 3rem auto;
    position: relative;
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
    width: 2rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-image: url(public/immagini/arrow.png);
    background-position: bottom left;

    position: absolute;
    top: 6.5rem;
    left: -4rem;

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
    right: -4rem;

    &:hover {
        background-position: top right;
    }
}
</style>