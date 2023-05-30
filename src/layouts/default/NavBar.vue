<script lang="ts" setup>
  //
</script>

<template>
    <v-navigation-drawer permanent class="nav-background" :width="200">
        <template v-slot:prepend>
            <!-- <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" title="Jane Smith"
                        subtitle="Logged in">
                    </v-list-item> -->
            <v-list-item>
                <label class="switch btn-color-mode-switch">
                    <input type="checkbox" name="color_mode" id="color_mode" value="1">
                    <label for="color_mode" data-on="Casino" data-off="Sport" class="btn-color-mode-switch-inner">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </label>
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

<style lang="scss">
.nav-background {
    background-color: #29263C !important;
    color: #7782AA !important;
    border: 2px !important;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25) !important
}

label {
    font-size: 13px;
    color: #424242;
    font-weight: 500;
    box-sizing: content-box;
}

.btn-color-mode-switch {
    display: inline-block;
    margin: 0px;
    position: relative;
}

.btn-color-mode-switch>label.btn-color-mode-switch-inner {
    margin: 0px;
    width: 140px;
    height: 30px;
    background: #E0E0E0;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/
    display: block;
}

.btn-color-mode-switch>label.btn-color-mode-switch-inner:before {
    content: attr(data-on);
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    top: 7px;
    right: 20px;

}

.btn-color-mode-switch>label.btn-color-mode-switch-inner:after {
    content: attr(data-off);
    width: 70px;
    height: 16px;
    background: #fff;
    border-radius: 26px;
    position: absolute;
    left: 2px;
    top: 2px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
    padding: 5px 0px;
}

.btn-color-mode-switch>.alert {
    display: none;
    background: #FF9800;
    border: none;
    color: #fff;
}

.btn-color-mode-switch input[type="checkbox"] {
    cursor: pointer;
    width: 50px;
    height: 25px;
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 1;
    margin: 0px;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner {
    background: #151515;
    color: #fff;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner:after {
    content: attr(data-on);
    left: 68px;
    background: #3c3c3c;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner:before {
    content: attr(data-off);
    right: auto;
    left: 20px;
}

.btn-color-mode-switch input[type="checkbox"]:checked~.alert {
    display: block;
}
</style>