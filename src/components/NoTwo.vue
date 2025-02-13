<template>
<div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Loved+by+the+King&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <div class="centering-container loved-by-the-king-regular d-flex align-items-center justify-content-center">

        <v-card class="mx-auto" width="700" color="pink-lighten-4">

            <v-img class="gif" color="surface-variant" height="500" src="https://media.tenor.com/n3HRC9ym2usAAAAC/crying-cat.gif" cover>
            </v-img>
            <v-card-text class="text-h6 loved-by-the-king-regular">
                <p>Juli... ;-;</p>
                <br>

                <div class="d-flex justify-space-between">
                    <v-btn color="pink" outlined width="150" @click="redirectToMyHeart">
                        Ja! <v-icon>{{ mdiHeart }}</v-icon>
                    </v-btn>

                    <v-btn color="pink" outlined width="150" @click="redirectToThree()">
                        Nein... <v-icon>{{ mdiHeartBroken }}</v-icon>
                    </v-btn>
                </div>

            </v-card-text>
        </v-card>
    </div>
</div>
</template>

<script>
import {
    mdiChevronUp,
    mdiChevronDown,
    mdiHeartBroken,
    mdiHeart
} from '@mdi/js';
import {
    useRouter
} from 'vue-router';

export default {
    name: "NoTwo",

    data: () => ({
        show: false,
        mdiChevronUp: mdiChevronUp,
        mdiChevronDown: mdiChevronDown,
        mdiHeartBroken: mdiHeartBroken,
        mdiHeart: mdiHeart,
    }),

    setup() {
        const router = useRouter();
        return {
            router
        };
    },

    methods: {
        redirectToMyHeart() {
            this.router.push({
                path: '/YES'
            });
        },

        redirectToThree() {
            this.router.push({
                path: '/pleeease'
            });
        }

    }
};
</script>

<style>
.loved-by-the-king-regular {
    font-family: "Loved by the King", serif;
    font-weight: 400;
    font-style: normal;
}

.centering-container {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-expand-transition--enter-active,
.v-expand-transition--leave-active {
    transition: height 1s ease-in-out, opacity 1s ease-in-out;
    overflow: hidden !important;
}

.v-expand-transition--enter-from,
.v-expand-transition--leave-to {
    opacity: 0;
    height: 0 !important;
}

.v-expand-transition--enter-to,
.v-expand-transition--leave-from {
    opacity: 1;
    height: auto !important;
}
</style>
