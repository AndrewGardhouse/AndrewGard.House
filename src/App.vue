<template>
  <div id="app">
    <router-view/>
    <BackgroundBeam v-for="n in 22" :getRandomFloat="getRandomFloat"></BackgroundBeam>
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
html, body {
  overflow: hidden
}

body {
  font-family: 'Press Start 2P', cursive;
  color: white;
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
  color: white;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  animation: page-load 3s;
}

@keyframes page-load {
  from {
    box-shadow: inset 0 0 0 350px #000;
  }
  to {
    box-shadow: inset 0 0 0 0px #000;
  }
}

@keyframes beam {
  100% { left: -110%; }
}
</style>
