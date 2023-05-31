<script lang="ts" setup>
import { ref } from "vue";
const open = ref(['']);
</script>

<template>
    <v-navigation-drawer permanent class="nav-background" :width="240">
        <template v-slot:prepend>
            <v-list-item class="casino-toggle">
                <input type="checkbox" id="casino-toggle" />
                <label for="casino-toggle">
                    <div class="casino">
                        <img src="@/assets/public/svg/Casino.svg" />
                        <P>CASINO</P>
                    </div>
                    <div class="sport">
                        <img src="@/assets/public/svg/Sport.svg" />
                        <P>SPORT</P>
                    </div>
                </label>
            </v-list-item>
        </template>
        <v-list density="compact" nav class="mt-6">
            <v-card color="#211F31" theme="dark">
                <v-row class="ma-4 align-center">
                    <span class="card-title">My VIP Perks</span>
                    <span class="ml-10 more-font">More</span>
                    <v-btn class="right-btn" icon="true">
                        <v-icon icon="mdi-chevron-right" />
                    </v-btn>
                </v-row>
                <v-row class="ma-1">
                    <v-col cols="6" class="pa-1">
                        <v-list-item value="casino" class="ma-0 pa-0">
                            <img src="@/assets/left_navigation/svg/task.svg" class="img-width" />
                        </v-list-item>
                    </v-col>
                    <v-col cols="6" class="pa-1">
                        <v-list-item value="sport" class="ma-0 pa-0">
                            <img src="@/assets/left_navigation/svg/spin.svg" class="spin-img-width" />
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-card>
        </v-list>
        <v-list density="compact" nav>
            <v-list-item value="earn free" class="ma-0 pa-0">
                <img src="@/assets/left_navigation/svg/earn_free.svg" class="earn-free-img" />
            </v-list-item>
        </v-list>
        <v-list v-model:opened="open">
            <v-list-group value="Casino">
                <template v-slot:activator="{ props }">
                    <v-list-item class="avatar-img" v-bind="props" prepend-avatar="@/assets/public/svg/Casino.svg"
                        title="CASINO" link value="casino"></v-list-item>
                </template>
                <v-card color="#211F31" theme="dark" class="ma-2">
                    <v-list>
                        <v-list-item class="casino-sub-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_35.svg"
                            title="Recently Played" value="recently played"></v-list-item>
                        <v-list-item class="casino-sub-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_36.svg"
                            title="Favorites" value="favorites"></v-list-item>
                        <v-list-item class="casino-sub-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_37.svg"
                            append-icon="mdi-chevron-right" title="Game Originals" value="game originals"></v-list-item>
                        <v-list-item class="casino-sub-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_38.svg"
                            title="Slots" value="slots"></v-list-item>
                        <v-list-item class="casino-sub-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_39.svg"
                            title="Live Casino" value="live casino"></v-list-item>
                    </v-list>
                </v-card>
            </v-list-group>
        </v-list>
        <v-list>
            <v-list-item class="avatar-img" prepend-avatar="@/assets/public/svg/Sport.svg" title="SPORT"
                value="sport"></v-list-item>
        </v-list>
        <v-divider class="divider"></v-divider>
        <v-list>
            <v-list-item class="avatar-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_41.svg"
                title="Promotions" value="promotions"></v-list-item>
            <v-list-item class="vip-club" prepend-avatar="@/assets/left_navigation/svg/icon_public_42.svg" title="VIP Club"
                value="vip club"></v-list-item>
            <v-list-item class="avatar-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_43.svg"
                title="Affiliate" value="affiliate"></v-list-item>
            <v-list-item class="avatar-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_44.svg" title="Blog"
                value="blog"></v-list-item>
        </v-list>
        <v-divider class="divider"></v-divider>
        <v-list>
            <v-list-item class="avatar-img" prepend-avatar="@/assets/left_navigation/svg/icon_public_45.svg"
                title="Live support" value="live support"></v-list-item>
        </v-list>
        <v-list>
            <v-card color="#211F31" theme="dark" class="mx-2 language-item">
                <v-list-item class="casino-sub-img" prepend-avatar="@/assets/public/svg/img_public_01.svg"
                    title="English | R$ BRL" value="english" append-icon="mdi-chevron-down"></v-list-item>
            </v-card>
        </v-list>
        <v-list>
            <v-list-item class="theme-toggle">
                <input type="checkbox" id="theme-toggle" />
                <label for="theme-toggle">
                    <div class="dark">
                        <img src="@/assets/left_navigation/svg/icon_public_46.svg" />
                        <P>Dark</P>
                    </div>
                    <div class="light">
                        <img src="@/assets/left_navigation/svg/icon_public_47.svg" />
                        <P>Light</P>
                    </div>
                </label>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.nav-background {
    background-color: #29263C !important;
    color: #7782AA !important;
    border: 2px !important;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25) !important;
}

::deep(.v-navigation-drawer__content) {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden !important;

    &::-webkit-scrollbar {
        width: 2px
    }

    &::-webkit-scrollbar-thumb {
        background: #5142af;
        border-radius: 20px;
    }
}

// casino and sport toggle switch
.casino-toggle {
    label {
        width: 200px;
        height: 40px;
        position: relative;
        display: block;
        background: #211F31;
        border-radius: 20px !important;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: 0.3s;

        div {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 14px;
        }

        .casino {
            left: 14px;
            transition: 0.3s;
            color: black;

            img {
                width: 20px;
                height: 24px;
                margin-right: 4px;
            }
        }

        .sport {
            left: 120px;
            transition: 0.3s;
            color: #7782AA;

            img {
                width: 20px;
                margin-right: 4px;
            }
        }
    }

    label:after {
        content: "";
        width: 100px;
        height: 36px;
        position: absolute;
        top: 2px;
        left: 2px;
        background: #32CFEC;
        border-radius: 18px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
    }

    input {
        width: 0;
        height: 0;
        visibility: hidden;
    }

    input:checked+label:after {
        left: 200px;
        transform: translateX(-100%);
    }

    label:active:after {
        width: 100px;
    }

    input:checked+label .casino {
        color: #7782AA
    }

    input:checked+label .sport {
        color: black
    }

}

.card-title {
    color: #D99504;
    font-weight: 700;
    font-size: 16px;
}

.more-font {
    font-weight: 500;
    font-size: 12px;
    color: #7782AA
}

.right-btn {
    font-weight: 500;
    font-size: 12px;
    color: #7782AA;
    box-shadow: none !important;
    background-color: transparent !important;
    position: absolute !important;
    top: 3px;
    right: 5px;
}

.img-width {
    width: 100%;
}

.spin-img-width {
    width: 100%;
    margin-top: 4px;
}

.earn-free-img {
    width: 100%
}

.avatar-img {
    :deep(.v-avatar--density-default) {
        height: 24px;
        width: 20px;
        border-radius: 0px;
    }

    :deep(.v-list-item-title) {
        font-weight: 700;
        font-size: 14px;
        color: #7782AA;
    }
}

.vip-club {
    :deep(.v-avatar--density-default) {
        height: 24px;
        width: 20px;
        border-radius: 0px;
    }

    :deep(.v-list-item-title) {
        font-weight: 700;
        font-size: 14px;
        color: #F9BC01;
    }
}

.casino-sub-img {
    :deep(.v-avatar--density-default) {
        height: 22px;
        width: 22px;
        border-radius: 0px;
    }

    :deep(.v-list-item-title) {
        font-weight: 500;
        font-size: 14px;
        color: #7782AA;
    }
}

.divider {
    width: 180px;
    margin: auto;
    border-width: thin;
}

.casino-sub-img {
    :deep(.v-list-item__content) {
        align-self: center;
        grid-area: content;
        overflow: hidden;
        width: 105px;
    }

    :deep(.v-list-item__append > .v-icon) {
        margin-inline-start: 18px;
    }
}

.language-item {
    :deep(.v-list-item__content) {
        align-self: center;
        grid-area: content;
        overflow: hidden;
        width: 105px;
    }

    :deep(.v-list-item__append > .v-icon) {
        margin-inline-start: 18px;
    }
}


// dark and light toggle switch
.theme-toggle {
    height: 50px;

    label {
        width: 200px;
        height: 40px;
        position: relative;
        display: block;
        background: #211F31;
        border-radius: 20px !important;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: 0.3s;

        div {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 14px;
        }

        .dark {
            left: 14px;
            transition: 0.3s;
            color: white;

            img {
                width: 20px;
                height: 24px;
                margin-right: 4px;
            }
        }

        .light {
            left: 120px;
            transition: 0.3s;
            color: #7782AA;

            img {
                width: 20px;
                margin-right: 4px;
            }
        }
    }

    label:after {
        content: "";
        width: 100px;
        height: 36px;
        position: absolute;
        top: 2px;
        left: 2px;
        background: #353652;
        border-radius: 18px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
    }

    input {
        width: 0;
        height: 0;
        visibility: hidden;
    }

    input:checked+label:after {
        left: 200px;
        transform: translateX(-100%);
    }

    label:active:after {
        width: 100px;
    }

    input:checked+label .dark {
        color: #7782AA
    }

    input:checked+label .light {
        color: white
    }

}
</style>
