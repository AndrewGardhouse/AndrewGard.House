<template>
  <div id="app">
    <router-view/>
    <BackgroundBeam v-for="n in 22" :getRandomFloat="getRandomFloat" :isAboutPage="isAboutPage"></BackgroundBeam>
    <LightBeam v-for="n in 10" :getRandomFloat="getRandomFloat" :isAboutPage="isAboutPage"></LightBeam>
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
  computed: {
    isAboutPage() {
      return this.$route.name === 'about';
    }
  },
  updated() {
    console.log(this.endAnimation);
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
}

@keyframes beam {
  100% { left: -110%; }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
