<template>
    <div class="login-container">
        <b-container>
            <b-row
            class="d-flex justify-content-center"
            >
                <b-col
                class="center-box "
                sm="10" 
                md="9"
                lg="8"
                xl="7"
                >
                    <div
                    class="box p-3"
                    >
                        <div class="hvr-buzz">
                            <img src="~@/assets/logo.png" alt="" height="130"><br>
                            <h1 class="text-white">Instant Cash</h1>
                        </div>
                        <div class="d-flex justify-content-center">
                            <b-form class="col-9">
                                <label for="text-password" class="text-white">Usuario</label>
                                <b-form-input placeholder="Ingresa tu usuario" type="text" id="text-user" class="mb-3" disabled></b-form-input>
                            
                                <label for="text-password" class="text-white">Contraseña</label>
                                <b-form-input placeholder="Ingresa tu contraseña" type="password" id="text-password" aria-describedby="password-help-block" class="mb-4" disabled></b-form-input>
                                <h6 class="text-gray">No es necesario ingresar un Usuario o Contraseña</h6>
                                <b-btn class="mb-3 hvr-buzz" @click="hideLogInAction">Ingresar</b-btn>
                            </b-form>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    methods: {
        ...mapActions(["hideLogInAction"])
    }
}
</script>

<style lang="scss" scoped>
    .login-container {
        height: 100vh;
        width: 100%;
        background: #606c88;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    .center-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .box {
        margin-top: 15%;
        background-color: #212529;
        border: 2px solid gray;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
    }
    .title-color {
        color: white;
    }
    .text-gray{
        color: gray;
    }

    // Buzz effect
    @-webkit-keyframes hvr-buzz {
    50% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    100% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
    }
    @keyframes hvr-buzz {
    50% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    100% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
    }
    .hvr-buzz {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    .hvr-buzz:hover, .hvr-buzz:focus, .hvr-buzz:active {
        -webkit-animation-name: hvr-buzz;
        animation-name: hvr-buzz;
        -webkit-animation-duration: 0.15s;
        animation-duration: 0.15s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
    .title-animation {
        animation: jackInTheBox;
        animation-duration: 2s;
    }
    /* Pulse */
    @-webkit-keyframes hvr-pulse {
    25% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    75% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }
    }
    @keyframes hvr-pulse {
    25% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    75% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }
    }
    .hvr-pulse {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    .hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    }

    /* Pulse Grow */
    @-webkit-keyframes hvr-pulse-grow {
    to {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    }
    @keyframes hvr-pulse-grow {
    to {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    }
    .hvr-pulse-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    .hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {
    -webkit-animation-name: hvr-pulse-grow;
    animation-name: hvr-pulse-grow;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
    }

</style>