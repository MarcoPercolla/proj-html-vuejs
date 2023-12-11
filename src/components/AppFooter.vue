<script>
import { store } from "../store.js" //state management


export default {
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
            <div class="footerCard">
                <h3>blabla</h3>
                <ul>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                </ul>
            </div>
            <div class="footerCard">
                <h3>blabla</h3>
                <ul>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                </ul>
            </div>
            <div class="footerCard">
                <h3>blabla</h3>
                <ul>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                </ul>
            </div>
            <div class="footerCard">
                <h3>blabla</h3>
                <ul>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                    <li><a href="#">blabla</a></li>
                </ul>
            </div>

        </div>
        <hr>

        <div class="container lowFoot">
            <p>blabla</p>
            <p>i</p>

        </div>

    </footer>
</template>

<style scoped lang="scss">
footer {
    height: 22rem;
    background-color: chocolate;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}

.topFoot {
    height: 20rem;
    background-color: rgba(0, 0, 0, 0.14);
}

.lowFoot {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.14);
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