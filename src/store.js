import { reactive } from 'vue'

export const store = reactive({
    slides1: [
        {
            immagine: '/immagini/main-banner-01.jpg',
            titolo: 'Resident Evil 3 Remake',

        },
        {
            immagine: '/immagini/main-banner-02.jpg',
            titolo: 'New Jump Force Goku',

        },

    ],
    slides2: [
        {
            immagine: '/immagini/cms-banner-01.jpg',
            titolo: 'The battelfield 4 Naval strike',

        },
        {
            immagine: '/immagini/cms-banner-02.jpg',
            titolo: 'Assassins Creed unity game',

        },

    ],
});