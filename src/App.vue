<template>
  <div id="app">
    <router-view/>
    <BackgroundBeam v-for="n in 18" :getRandomFloat="getRandomFloat"></BackgroundBeam>
    <LightBeam v-for="n in 10" :getRandomFloat="getRandomFloat"></LightBeam>
  </div>
</template>

<script>
import LightBeam from './components/LightBeam.vue';
import BackgroundBeam from './components/BackgroundBeam.vue';

export default {
  components: {
    LightBeam,
    BackgroundBeam
  },
  methods: {
    getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }
  }
}
</script>

<style lang="less">
@font-face {
  font-family: 'Astron Boy';
  src: url('./assets/astron-boy.otf')
}

html, body {
  overflow: hidden
}

body {
  font-family: "Helvetica";
  text-align: center;
  background: linear-gradient(#000, #040029, #040029, #040029, #040029, #040029, #000);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  position: relative;
}

a {
  text-decoration: none;
}

p {
  font-family: 'Press Start 2P', cursive;
  color: white;
}

h1 {
  font-family: 'Astron Boy', sans-serif;
  color: white;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
}

@keyframes slide {
  100% { left: -110%; }
}
</style>
