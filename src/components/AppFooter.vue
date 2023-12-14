<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppFooter does things");
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
                <input type="text">
            </div>

        </div>
        <hr>

        <div class="container lowFoot">
            <p>Copyright © 2023 Codezeel</p>
            <p>i</p>

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
    }

}

a {
    text-decoration: none;
    color: grey;
}
</style>