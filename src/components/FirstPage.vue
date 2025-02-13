<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Loved+by+the+King&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

<!-- Centering Container -->
<div class="centering-container loved-by-the-king-regular d-flex align-items-center justify-content-center">

    <v-card class="mx-auto" width="700" color="pink-lighten-4">

        <v-expand-transition>
            <div v-if="!show">
                <v-img color="surface-variant" height="500" src="https://i.pinimg.com/736x/d2/45/52/d245527fccbba9ba7e829cdd62ffffa9.jpg" cover>
                </v-img>
                <v-card-title>
                    <span style="color: black;" class="loved-by-the-king-regular font-weight-bold">Hey Juli! :3 </span>
                </v-card-title>
                <v-card-text class="text-h6 loved-by-the-king-regular">
                    Ich würde dich gerne fragen...
                </v-card-text>
            </div>
        </v-expand-transition>

        <v-expand-transition>
            <div v-if="show">
                <v-img color="surface-variant" height="500" src="https://media.tenor.com/Squ3kjjRQ-UAAAAC/cat-heart.gif" cover>
                </v-img>
                <v-card-text class="text-h6 loved-by-the-king-regular">
                    <p>...ob du mein Valentins-Date sein möchtest?</p>
                    <br>
                    <div class="d-flex justify-space-between">
                        <v-btn color="pink" outlined width="150" @click="redirectToMyHeart">
                            Ja! <v-icon>{{ mdiHeart }}</v-icon>
                        </v-btn>

                        <v-btn color="pink" outlined width="150" @click="redirectNoOne">
                            Nein... <v-icon>{{ mdiHeartBroken }}</v-icon>
                        </v-btn>

                    </div>

                </v-card-text>
            </div>
        </v-expand-transition>

        <v-card-actions v-if="!show" class="justify-end">
            <v-btn color="pink" outlined :append-icon="show ? mdiChevronUp : mdiChevronDown" @click="show = !show">
                Klick mich!
            </v-btn>
        </v-card-actions>

    </v-card>

    <NoOne v-if="noOne" />
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
    name: "FirstPage",

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

        redirectNoOne() {
            this.router.push({
                path: '/No'
            });
        },
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
