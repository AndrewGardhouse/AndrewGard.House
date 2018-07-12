<template lang="html">
  <div class="container">
    <transition name="title-fade" appear>
      <div class="title">
        <h1>ANDREW GARDHOUSE</h1>
        <p>Web Developer</p>
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
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

.title, .options {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
}
.title {
  margin-top: auto;
  h1 {
    font-size: 4rem;
    margin-bottom: 0;
  }
  p {
    font-size: 2rem;
    margin-top: 1rem;
  }
}

.options {
  margin-top: 1.5rem;
  margin-bottom: auto;
  ul {
    list-style: none;
    padding: 0;
  }
  p {
    font-size: 1.25rem;
  }
}
</style>
