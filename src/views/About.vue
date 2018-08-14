<template>
  <div class="about">
    <transition name="about-page-loaded" appear>
      <div class="scene">
        <div class="max-width-4 mx-auto inline-block relative">
          <p class="h2 pb4">After that bit of shenanigans, Cool and I looked at buying another vendor set for my Shadow spec but I was having a lot of crashing issues as soon as I ported from Org to the Valley. </p>
        </div>
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
    p {
      line-height: 1.5;
      overflow: hidden;
      padding: 0;
      opacity: 0;
      animation: text-scroll;
      animation-timing-function: linear;
      animation-duration: 6s;
      animation-fill-mode: forwards;
      animation-delay: 3s;
    }
    .ground {
      height: 25%;
      background-color: #000;
    }
  }
}
</style>
