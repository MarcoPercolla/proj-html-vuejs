import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faComments);
library.add(faCalendarDays);
library.add(faUser);
library.add(faMagnifyingGlass);
library.add(faBagShopping);
library.add(faStar);
library.add(faHeart);
library.add(faEye);
library.add(faMaximize);

window.vue = {};
window.vue.App = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
