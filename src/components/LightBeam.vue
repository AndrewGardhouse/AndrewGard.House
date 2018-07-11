<template lang="html">
  <div class="light-beam" :style="styles"></div>
</template>

<script>
export default {
  props: {
    getRandomFloat: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
      styles: {
        height: '',
        width: '',
        top: '',
        animation: '',
        animationDelay: ''
      }
    }
  },
  created() {
    this.styles.width = `${this.getRandomFloat(45, 50)}%`
    this.styles.height = `${this.getRandomFloat(1.5, 2.5)}%`
    this.styles.top = `${this.getRandomFloat(5, 95)}%`
    this.styles.animation = `beam ${this.getRandomFloat(4, 5)}s infinite`
    this.styles.animationDelay = `${this.getRandomFloat(1, 3)}s`
  }
}
</script>

<style lang="less">
@keyframes slide {
  100% { left: -110%; }
}

.light-beam {
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    rgba(0, 249, 185, 1),
    rgba(0, 131, 156, 0.75),
    rgba(0, 103, 155, 0.5),
    rgba(24, 0, 103, 0.25),
    rgba(0,250,188,0)
  );
  left: 110%;
  border-radius: 7.5px;
  position: absolute;
  &::before {
    content: '';
    box-shadow: 0px 0 37px 3px #00998F;
    z-index: -1;
    position: absolute;
    width: 5%;
    height: 100%;
    border-radius: 15px;
    top: 0;
    left: 0;
  }
}
</style>
