<script lang="ts" setup>
  //
</script>

<template>
    <v-navigation-drawer permanent class="nav-background" :width="240">
        <template v-slot:prepend>
            <v-list-item>
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
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.nav-background {
    background-color: #29263C !important;
    color: #7782AA !important;
    border: 2px !important;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25) !important
}

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
input:checked + label .casino {
	color: #7782AA
}
input:checked + label .sport {
	color: black
}
</style>
