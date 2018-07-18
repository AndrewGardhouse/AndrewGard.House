<template lang="html">
  <div class="container">
    <transition name="title-fade" appear>
      <div class="title mt-auto">
        <h1 class="mt0 mb1">ANDREW GARDHOUSE</h1>
        <p class="my2">Web Developer</p>
      </div>
    </transition>
    <transition name="options-fade" appear>
      <Options></Options>
    </transition>
  </div>
</template>

<script>
import Options from '../components/Options.vue';

export default {
  components: {
    Options
  }
}
</script>

<style lang="less">
@keyframes page-load {
  from {
    box-shadow: inset 0 0 0 350px #000;
  }
  to {
    box-shadow: inset 0 0 0 0px #000;
  }
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

.title-fade-enter-active, .title-fade-leave-active {
  opacity: 0;
  animation: fadein 2s linear;
  animation-delay: 2s;
}

.options-fade-enter-active, .options-fade-leave-active {
  opacity: 0;
  animation: fadein 0.5s linear;
  animation-delay: 3s;
}

.title {
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
  }
}
</style>
