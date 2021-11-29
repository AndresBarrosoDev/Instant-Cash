<template>
  <div id="app">
    <!-- Antes de mostrar el sitio, es necesario ingresar tus datos de usuario -->
    <div v-if="!showLogIn">
      <LogIn/>
    </div>
    <!-- Aquí se renderiza el sitio -->
    <div v-else>
      <NavBar/>
      <transition name="scale-in" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import LogIn from "@/components/LogIn.vue";
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    LogIn,
    NavBar
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["showLogIn"]),
  },
  methods: {
    ...mapActions([""])
  },
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #606c88;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  // slide Transition Effect. name="slide" mode="out-in"
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }

  // moveUp Transition Effect. name="moveUp"
  .moveUp-enter-active {
    animation: fadeIn 1s ease-in;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }
  .moveUp-leave-active {
    animation: moveUp .3s ease-in;
  }
  @keyframes moveUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-400px);
    }
  }

  /* fade animation */
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
      opacity: 0;
  }

  /* fade horizontally */
.fade-x-enter,
.fade-x-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.fade-x-enter-active,
.fade-x-leave-to {
  transition: opacity 0.3s, transform 0.5s;
}

// flip horizontally
.flip-x-enter,
.flip-x-leave-to{
  transform: rotateY(-80deg);
  opacity: 0;
}

.flip-x-enter-active,
.flip-x-leave-active{
    transition:  transform 0.5s, opacity 0.3s;
}  

/* roll in animation */
.roll-in-left-enter,
.roll-in-left-leave-to{
    transform: translateX(-500px) rotate(-200deg);
    opacity: 0;
}

.roll-in-left-enter-active,
.roll-in-left-leave-active{
    transition:  transform 0.3s, opacity 0.5s ;
}

/* scalle in animation */
.rotate-enter,
.rotate-leave-to{
    transform: rotate(-360deg);
    opacity: 0;
}

.rotate-enter-active,
.rotate-leave-active{
    transition:  transform 0.7s, opacity 0.5s ;
}

/* scalle in animation */
.scale-in-enter,
.scale-in-leave-to{
  transform: scale(0.88);
  opacity: 0;
}

.scale-in-enter-active,
.scale-in-leave-active{
    transition:  transform 0.3s, opacity 0.5s ;
}

/* shrink animation */
.shrink-enter,
.shrink-leave-to {
  transform: scale(1.12);
  opacity: 0;
}

.shrink-enter-active,
.shrink-leave-active {
  transition: transform 0.5s, opacity 0.3s;
}

// swirl animation
.swirl-enter,
.swirl-leave-to{
  transform: rotate(-540deg) scale(0);
  opacity: 0;
}

.swirl-enter-active,
.swirl-leave-active{
    transition:  transform 0.5s, opacity 1s ;
}

/* tilt in animation */
.tilt-in-enter,
.tilt-in-leave-to{
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    opacity: 0;
}

.tilt-in-enter-active,
.tilt-in-leave-active{
    transition: ease-out  transform 0.4s, opacity 0.3s ;
}
</style>
