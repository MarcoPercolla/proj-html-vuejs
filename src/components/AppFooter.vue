<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppFooter",
    data() {
        return {
            store,
            // --variabile per v-model con input testuale
            input: "",
        }
    },
    methods: {
        // --metodo per svuotare input al press di enter
        doThings() {
            console.log("AppFooter does things");
            this.input = "";
        }
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <footer>
        <div class="container topFoot">
            <div class="footerCard" v-for="element in catalog">
                <h3>{{ element.link }}</h3>
                <ul>
                    <li v-for="subel in element.descrizione"><a href="#">{{ subel }}</a></li>
                </ul>
            </div>

            <div class="footerCard">
                <h3>Our Newsletter</h3>
                <p>There are many variations of passages of form humour or randomised</p>
                <input class="search" type="text" @keyup.enter="doThings" v-model="input">
            </div>

        </div>
        <hr>

        <div class="container lowFoot">
            <p>Copyright © 2023 Codezeel</p>
            <!-- immagini gestite con image sprites -->
            <div>
                <img class="payImg" id="visa1" width="1" height="2">
                <img class="payImg" id="visa2" width="1" height="2">
                <img class="payImg" id="visa3" width="1" height="2">
                <img class="payImg" id="visa4" width="1" height="2">
                <img class="payImg" id="visa5" width="1" height="2">
                <img class="payImg" id="visa6" width="1" height="2">
            </div>

        </div>

    </footer>
</template>

<style scoped lang="scss">
footer {
    height: 30rem;
    background-image: url(public/immagini/footer-bg.png);
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}

.topFoot {
    height: 27rem;

}

.lowFoot {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.footerCard {
    height: 15rem;
    width: 22%;

    >ul {
        list-style: none;
        height: 12rem;
        margin: 0.5rem 0;

        >li {
            margin: 0.5rem 0;

        }
    }

}

a {
    text-decoration: none;
    color: grey;

}

p {
    color: grey;
    margin: 0.5rem 0;
}

.payImg {
    margin: 0.2rem;
}

.search {
    margin-top: 2rem;
    height: 2rem;
    width: 100%;
}

// ----sprites
#visa1 {
    width: 40px;
    height: 24px;
    background: url(public/immagini/payments.png) 0 0;
}

#visa2 {
    width: 40px;
    height: 24px;
    background: url(public/immagini/payments.png) 0 -40px;
}

#visa3 {
    width: 40px;
    height: 24px;
    background: url(public/immagini/payments.png) 0 -80px;
}

#visa4 {
    width: 40px;
    height: 24px;
    background: url(public/immagini/payments.png) 0 -120px;
}

#visa5 {
    width: 40px;
    height: 24px;
    background: url(public/immagini/payments.png) 0 -160px;
}

#visa6 {
    width: 40px;
    height: 24px;
    background: url(public/immagini/payments.png) 0 -200px;
}
</style>