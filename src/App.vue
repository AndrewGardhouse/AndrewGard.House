<template>
  <div id="app">
    <router-view/>
    <LightBeam v-for="n in 20" :getRandomFloat="getRandomFloat"></LightBeam>
  </div>
</template>

<script>
import LightBeam from './components/LightBeam.vue';

export default {
  components: {
    LightBeam
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

.light-beam-animation {
  animation: slide 2.5s;
  animation-timing-function: linear;
}

.background-beam-animation {
  animation: slide 5s;
  animation-timing-function: linear;
}

// .light-beam {
//   background: linear-gradient(
//     to right,
//     rgba(0, 249, 185, 1),
//     rgba(0, 131, 156, 0.75),
//     rgba(0, 103, 155, 0.5),
//     rgba(24, 0, 103, 0.25),
//     rgba(0,250,188,0)
//   );
//   left: 110%;
//   border-radius: 7.5px;
//   position: absolute;
//   z-index: 1;
//   &::before {
//     content: '';
//     box-shadow: 0px 0 37px 3px #00998F;
//     z-index: -1;
//     position: absolute;
//     width: 5%;
//     height: 100%;
//     border-radius: 15px;
//     top: 0;
//     left: 0;
//   }
// }

.background-beam {
  border-radius: 15px;
  position: absolute;
  background: linear-gradient(
    to right,
    rgba(22, 20, 121, 1) 80%,
    rgba(22, 20, 121, 0)
  );
  left: 110%;
  &::before {
    content: '';
    box-shadow: -10px 0 25px 1px #160069;
    z-index: -1;
    position: absolute;
    width: 80%;
    height: 100%;
    border-radius: 15px;
    top: 0;
    left: 0;
  }
}
</style>
