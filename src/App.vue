<template>
  <div id="app">
    <router-view/>
    <BackgroundBeam v-for="n in 22" :key="`bb-${n}`" :getRandomFloat="getRandomFloat"></BackgroundBeam>
    <LightBeam v-for="n in 10" :key="`lb-${n}`" :getRandomFloat="getRandomFloat"></LightBeam>
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

<style lang="scss">
@import "./assets/keyframes";

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

.mt-auto {
  margin-top: auto;
}

.mb-auto {
  margin-bottom: auto;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.button {
  background-color: #000;
  color: #fff;
  border: 3px solid #fff;
  padding: 1rem;
  font-family: 'Press Start 2P';
  font-size: 1rem;
  cursor: pointer;
  transition: border 0.7s;
  &:hover, &:focus {
    border-color: rgba(0, 249, 185, 1);
    outline: none;
  }
}

a {
  text-decoration: none;
  color: white;
  user-select: none;
}
</style>
