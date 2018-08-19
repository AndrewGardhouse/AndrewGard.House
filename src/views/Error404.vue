<template lang="html">
  <transition name="game-over" appear>
    <div class="error flex flex-column relative">
      <p class="h1 mt-auto mb3 mx-auto title">GAME OVER</p>
      <router-link class="mb-auto mx-auto restart" to="/">
        <span class="restart-text inline-block">
          Continue?
        </span>
      </router-link>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "../assets/breakpoints";

.error {
  background-color: #000;
  height: 100vh;
  overflow: hidden;
  z-index: 4;
  &.game-over-enter-active, &.game-over-leave-active {
    transition: height 3s linear;
    height: 100vh;
  }
  &.game-over-enter, &.game-over-leave-to {
    height: 0vh;
    transition: height 1.5s linear;
    .title, .restart {
      display: none;
    }
  }
  .title, .restart {
    opacity: 0;
    animation-name: fadein;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  .title {
    animation-delay: 3s;
    font-size: 2.5rem;
    @media #{$breakpoint-md} {
      font-size: 4rem;
    }
  }
  .restart {
    animation-delay: 4s;
    font-size: 2.25rem;
    @media #{$breakpoint-md} {
      font-size: 2.5rem;
    }
    .restart-text {
      animation: pulsate 1.5s infinite;
    }
  }
}
</style>
