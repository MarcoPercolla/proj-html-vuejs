<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppHeader",
    data() {
        return {
            store,
            navIndex: 100,
        }
    },
    methods: {
        toggle(n) {
            if (this.navIndex == n) {
                this.navIndex = 1000

            } else {
                this.navIndex = n

            }

        }
    },
    mounted() {


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
                <ul class="navContainer">
                    <li class="linkList" v-for="(el, i) in catalog" @click="toggle(i)">
                        <a class="listName" href="#">{{ el.link }}</a>
                        <div class="tenda">
                            <div class="tendina" v-if="el.descrizione" v-for="(subEl) in el.descrizione"
                                :class="this.navIndex == i ? `opened` : `closed`">

                                <a class="tendinaLink" href="">{{ subEl }}</a>
                            </div>
                            <div class="doppiaTendina" v-if="el.descrizione2" v-for="subEl2 in el.descrizione2"
                                :class="this.navIndex == i ? `opened2` : `closed`">
                                <div>
                                    <h5>{{ subEl2.nome1 }}</h5>
                                    <ul>
                                        <li v-for="sublink in subEl2.gallery"><a href="">{{ sublink }}</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>{{ subEl2.nome2 }}</h5>
                                    <ul>

                                        <li v-for="sublink in subEl2.portfolio"><a href="">{{ sublink }}</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

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
    height: 5rem;
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


    >.navContainer {
        list-style: none;
        display: flex;

        .listName {
            text-decoration: none;
            color: #ffffff;
            padding: 0 1.5rem;

        }
    }
}

.navContainer {
    list-style: none;
    display: flex;

}

.navIcons {
    display: flex;

    a {
        text-decoration: none;
        color: #ffffff;
        margin: 0 0.5rem;
    }
}

.tenda {
    position: absolute;
}

.tendina {
    background-color: red;
    width: 6rem;
    padding: 0.5rem;
    z-index: 999;
    position: relative;
    top: 1rem
}

.tendinaLink {
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem 0;

}

.doppiaTendina {
    background-color: red;
    display: flex;
    justify-content: space-around;
    width: 8rem;
    z-index: 998;
    position: relative;
    top: 1rem;

    a {
        text-decoration: none;
        color: #ffffff;
        padding: 0.5rem 0;
    }

    ul {
        list-style: none;
        text-align: center;
    }
}

.closed {
    display: none;
}

.opened {
    display: block;
}

.opened2 {
    display: flex;
}
</style>