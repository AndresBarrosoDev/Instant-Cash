<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/" custom class="hvr-buzz space-left">
                <img class="space-right" src="~@/assets/logo.png" alt="" height="35">
                <em class="">Instant Cash</em>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="spacer">
                <b-nav-item to="/NuevaSimulacion" custom class="hvr-buzz">Nueva Simulación</b-nav-item>
                <b-nav-item to="/ListadoCompras" custom class="hvr-buzz">Listado de Compras</b-nav-item>
                <b-nav-item to="/DashBoard" custom class="hvr-buzz">Dash Board</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style lang="scss" scoped>
    .spacer {
        margin-left: auto  ;
    }
    .space-left {
        margin-left: .5rem;
    }
    .space-right {
        margin-right: .3rem;
    }
    // Pequeña animación usando Animate.css
    .title-animation {
        animation: jackInTheBox;
        animation-duration: 2s;
    }
    // Efecto transición
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