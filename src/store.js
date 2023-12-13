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
    slides3: [
        {
            immagine: '/immagini/category-image-02-446x550_t.jpg',
            titolo: 'Batman',

        },
        {
            immagine: '/immagini/category-image-01-446x550_t.jpg',
            titolo: 'Bayonetta',

        },
        {
            immagine: '/immagini/category-image-03-446x550_t.jpg',
            titolo: 'Dark Souls',

        },

    ],
    slides5: [
        {
            immagine: '/immagini/cms-banner-03.jpg',
            titolo: 'Dragon Dogma Video Game',

        },
        {
            immagine: '/immagini/cms-banner-04.jpg',
            titolo: 'World of tanks New Game',

        },

    ],
    slides6: [
        {
            immagine: 'public/immagini/t2-1-100x100_left.jpg',
            titolo: 'Web designer',
            descrizione: '"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available"'

        },
        {
            immagine: 'public/immagini/t4-1-100x100_left.jpg',
            titolo: 'lavoratore',
            descrizione: 'bla bla bla bla bla bla bla bla'

        },
        {
            immagine: 'public/immagini/t5-1-100x100_left.jpg',
            titolo: 'lavoratore',
            descrizione: 'bla bla bla bla bla bla bla bla'

        },

    ],
    slides7: [
        {
            immagine: 'public/immagini/Rerum-facilis-est-et-exped-1400x878_t.jpg',
            data: 'jan 18/2021',
            commenti: 2,
            descrizione: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'

        },
        {
            immagine: 'public/immagini/Omnis-iste-natus-error-sit.jpg',
            data: 'jan 18/2021',
            commenti: 0,
            descrizione: ' by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available'

        },
        {
            immagine: 'public/immagini/Nisi-ut-aliquid-ex-ea-com-1400x878_t.jpg',
            data: 'jan 18/2021',
            commenti: 4,
            descrizione: 'There are many variations of passages of Lorem Ipsum available'

        },
        {
            immagine: 'public/immagini/Laborum-et-dolor-fuga-Et.jpg',
            data: 'jan 18/2021',
            commenti: 2,
            descrizione: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'

        },
        {
            immagine: 'public/immagini/Illo-inventore-veritatis-quasi.jpg',
            data: 'jan 18/2021',
            commenti: 0,
            descrizione: ' by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available'

        },
        {
            immagine: 'public/immagini/Et-quasi-architecto-beate.jpg',
            data: 'jan 18/2021',
            commenti: 4,
            descrizione: 'There are many variations of passages of Lorem Ipsum available'

        },
        {
            immagine: 'public/immagini/Consequunt-magni-dolores.jpg',
            data: 'jan 18/2021',
            commenti: 2,
            descrizione: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'

        },
        {
            immagine: 'public/immagini/Blandit-praesen-volupta.jpg',
            data: 'jan 18/2021',
            commenti: 0,
            descrizione: ' by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available'

        },
        {
            immagine: 'public/immagini/At-vero-eos-et-accusamus.jpg',
            data: 'jan 18/2021',
            commenti: 4,
            descrizione: 'There are many variations of passages of Lorem Ipsum available'

        },
        {
            immagine: 'public/immagini/Architecto-beatae-vitae-dicta.jpg',
            data: 'jan 18/2021',
            commenti: 4,
            descrizione: 'There are many variations of passages of Lorem Ipsum available'

        },



    ],
    slides8: [
        {
            immagine: '/immagini/brand-01.png',

        },
        {
            immagine: '/immagini/brand-02.png',

        },
        {
            immagine: '/immagini/brand-03.png',
        },
        {
            immagine: '/immagini/brand-04.png',
        },
        {
            immagine: '/immagini/brand-05.png',
        },
        {
            immagine: '/immagini/brand-04.png',
        },
        {
            immagine: '/immagini/brand-05.png',
        },
        {
            immagine: '/immagini/brand-01.png',
        },


    ],
    headerArray: [
        {
            link: 'home',


        },
        {
            link: 'shop',
            descrizione: ['Top Rated Product', 'Product Category'],

        },
        {
            link: 'Blog',
            descrizione: ['Left Sidebar', 'Right sidebar', 'Sidebar'],

        },
        {
            link: 'Media',
            descrizione2: [
                {
                    nome1: 'gallery',
                    nome2: 'portfolio',
                    gallery: ['2', '3', '4'],
                    portfolio: ['2', '3', '4'],

                }
            ],

        },
        {
            link: 'ShortCode',
            descrizione2: [
                {
                    nome1: 'gallery',
                    nome2: 'portfolio',
                    gallery: ['2', '3', '4'],
                    portfolio: ['2', '3', '4'],

                }
            ],

        },
        {
            link: 'Faq',
            descrizione: ['Top Rated Product', 'Product Category', 'Left Sidebar', 'Right sidebar', 'Sidebar'],

        },



    ],

});