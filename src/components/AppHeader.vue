<script>
import { store } from "../store.js" //state management


export default {
    props: ["catalog"],
    name: "AppHeader",
    data() {
        return {
            store,
            // --variabile per indicare index tendina aperta(impostata a 100default perchè == false)
            navIndex: 100,
        }
    },
    methods: {
        // --metodo per bindare successivamente al click su elemento navIndex e tendina aperta
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
        <!-- parte solo layout del header -->
        <div class="headerTop">
            <div class="headerFidget">
                <!-- qui avrei bindato {{valore}} al posto dello 0 se avessi creato un metodo per seguire wishlist-->
                <p>Wishlist (0)</p>
                <hr>
                <p>Need Help ?</p>
            </div>
            <p>Call 24/7 . 800-8754-987</p>

        </div>

        <div class="headerBottom">
            <img class="logo" src="../../public/immagini/logo.png" alt="">
            <nav class="navLinks">
                <ul class="navContainer">
                    <!-- richiama da props un elemento per ogni oggetto in arrayprops e aggiunge toggle per gestire apertura dropdown -->
                    <li class="linkList" v-for="(el, i) in catalog" @click="toggle(i)">
                        <a class="listName" href="#">{{ el.link }}</a>
                        <div class="tenda" :class="this.navIndex == i && this.navIndex != 0 ? `opened` : `closed`">
                            <div class="tendina" v-if="el.descrizione" v-for="(subEl) in el.descrizione"
                                :class="this.navIndex == i ? `opened2` : `closed`">

                                <a class="tendinaLink" href="">{{ subEl }}</a>
                            </div>
                            <!-- per gli elementi con descrizione2 in array(oggetto in oggetto) usa classe doppiatendina per flex -->
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

                    <a href=""><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
                    <a href=""><font-awesome-icon icon="fa-regular fa-user" /></a>
                    <a href=""><font-awesome-icon icon="fa-solid fa-bag-shopping" /></a>

                </div>

            </nav>


        </div>
    </header>
</template>

<style scoped lang="scss">
header {

    position: fixed;
    z-index: 1005;
    width: 100%;
    background-color: #1E1427
}

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

    width: 80%;
    display: flex;
    justify-content: space-between;


    >.navContainer {
        list-style: none;
        display: flex;

        .listName {
            text-decoration: none;
            color: #ffffff;
            padding: 0 1.5rem;

            &:hover {
                color: #f9aa01;
            }

        }
    }
}

.navContainer {
    width: 70%;
    list-style: none;
    display: flex;
    justify-content: space-around;

}

.navIcons {
    display: flex;

    a {
        text-decoration: none;
        color: #ffffff;
        margin: 0 0.5rem;

        &:hover {
            color: #f9aa01;
        }
    }
}

.tenda {
    position: absolute;
    background-color: #1E1427;
    z-index: 1000;
    margin-top: 5rem;
    font-size: 12px;

    border-radius: 0.1rem;
    border: solid 2px rgb(113, 98, 119);



}

.tendina {

    width: 6rem;
    padding: 0.5rem;
    z-index: 999;
    padding: 0.5rem 0.8rem;

}

.tendinaLink {
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem 0;


}

.doppiaTendina {


    display: flex;
    justify-content: space-around;
    min-width: 8rem;
    z-index: 998;
    padding: 0.5rem 0;

    h5 {
        text-align: center;
        font-size: 14px;
        margin: 0 0.5rem;
        color: #f9aa01;
    }


    a {
        text-decoration: none;
        color: #ffffff;

    }

    ul {
        list-style: none;
        text-align: center;

        li {
            margin: 0.2rem 0;
        }
    }
}

.closed {
    opacity: 0;



}

.opened {
    opacity: 1;
    margin-top: 1.7rem;
    transition: 0.5s;
}

.opened2 {
    opacity: 1;
    transition: 1s;
}
</style>