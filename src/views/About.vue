<template>
  <div class="about">
    <transition name="about-page-loaded" appear>
      <div class="scene">
        <Character></Character>
        <div class="ground"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Character from '../components/Character'

export default {
  components: {
    Character
  }
}
</script>

<style lang="scss">
.about-page-loaded-enter-active {
  animation: about-page-loaded 2.5s linear;
}

.about {
  height: 100vh;
  position: relative;
  z-index: 5;
  animation: light-flash 1.5s linear;
  .scene {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    top: 0%;
    .ground {
      height: 25%;
      background-color: #000;
    }
  }
}
</style>
