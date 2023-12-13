<script>
import { store } from "../store.js" //state management


export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppHeader does things");
        }
    },
    mounted() {

        this.doThings();
    }
}
</script>

<template>
    <header>
        <div class="headerTop">
            <div class="headerFidget">
                <p>bla </p>
                <hr>
                <p>blabla</p>
            </div>
            <p>call. 099099099099</p>

        </div>

        <div class="headerBottom">
            <img class="logo" src="../../public/immagini/logo.png" alt="">
            <nav class="navLinks">
                <ul>
                    <li v-for="el in store.headerArray">
                        <a href="#">{{ el.link }}</a>
                        <div v-if="el.descrizione" v-for="subEl in el.descrizione">{{ subEl }}</div>
                        <div v-else v-for="subEl2 in el.descrizione2">{{ subEl2.nome1 }} {{ subEl2.nome2 }}</div>
                    </li>

                </ul>
                <div class="navIcons">

                    <a href="">a</a>
                    <a href="">jjjjjjjja</a>
                    <a href="">a</a>

                </div>

            </nav>


        </div>
    </header>
</template>

<style scoped lang="scss">
.headerTop {
    height: 3rem;
    padding: 0 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid grey 1px;
    color: grey;
}

.headerFidget {
    display: flex;



}

hr {
    margin: 0 2rem;
}

.headerBottom {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;

}

.logo {
    height: 2rem;
}

.navLinks {

    width: 70%;
    display: flex;
    justify-content: space-between;

    ul {
        list-style: none;
        display: flex;

        a {
            text-decoration: none;
            color: #ffffff;
            margin: 0 0.5rem;
        }
    }
}



.navIcons {
    display: flex;

    a {
        text-decoration: none;
        color: #ffffff;
        margin: 0 0.5rem;
    }
}
</style>