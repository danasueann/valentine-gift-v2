<template>
<div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Loved+by+the+King&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <div class="centering-container loved-by-the-king-regular d-flex align-items-center justify-content-center">
        <v-card class="mx-auto" width="700" color="pink-lighten-4">
            <v-img class="gif" color="surface-variant" height="500" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F10LCn5MSXM8d3O%2Fgiphy.gif&f=1&nofb=1&ipt=d80c25cfbffb524fba968fb579b264a22d505cb191130805f85c4075825003b2&ipo=images" cover>
            </v-img>
            <v-card-text class="text-h6 loved-by-the-king-regular">
                <p>...Ist das dein Ernst? &gt;:(</p>
                <br>

                <div class="d-flex justify-space-between button-container">
                    <v-btn color="pink" outlined width="150" @click="redirectToMyHeart">
                        Ja! <v-icon>{{ mdiHeart }}</v-icon>
                    </v-btn>

                    <v-btn ref="neinBtn" color="pink" outlined width="150" @mouseover="moveButton" :style="buttonStyle" @click.stop="displayWarning">
                        Nein... <v-icon>{{ mdiHeartBroken }}</v-icon>
                    </v-btn>
                </div>

                <v-alert class="red-alert" v-if="showAlert" type="warning" dismissible @click="showAlert = false">
                    NÖ! ZÄHLT NICHT!
                </v-alert>
            </v-card-text>
        </v-card>
    </div>
</div>
</template>

<script>
import {
    mdiHeartBroken,
    mdiHeart
} from '@mdi/js';
import {
    useRouter
} from 'vue-router';

export default {
    name: "NoThree",
    data() {
        return {
            mdiHeartBroken,
            mdiHeart,
            isButtonMoved: false,
            top: null,
            left: null,
            showAlert: false
        };
    },
    setup() {
        const router = useRouter();
        return {
            router
        };
    },
    computed: {
        buttonStyle() {
            if (this.isButtonMoved) {
                return {
                    position: 'absolute',
                    top: `${this.top}px`,
                    left: `${this.left}px`
                };
            }
            return {};
        }
    },
    methods: {
        redirectToMyHeart() {
            this.router.push({
                path: '/YES'
            });
        },
        moveButton() {
            if (!this.isButtonMoved) {
                this.isButtonMoved = true;
            }
            const container = this.$el.querySelector('.button-container');
            const containerRect = container.getBoundingClientRect();
            const buttonRect = this.$refs.neinBtn.$el.getBoundingClientRect();

            this.top = Math.floor(Math.random() * (containerRect.height - buttonRect.height));
            this.left = Math.floor(Math.random() * (containerRect.width - buttonRect.width));
        },
        displayWarning() {
            this.showAlert = true;
        }
    }
};
</script>

<style scoped>
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

.button-container {
    position: relative;
    height: 100px;
}

.red-alert {
    background-color: rgba(255, 0, 0, 0.7) !important;
    color: white !important;
}
</style>
