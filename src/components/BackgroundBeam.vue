<template lang="html">
  <div class="background-beam" :style="styles"></div>
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
    this.styles.width = `${this.getRandomFloat(15, 30)}%`
    this.styles.height = `${this.getRandomFloat(0.1, 1)}%`
    this.styles.top = `${this.getRandomFloat(5, 95)}%`
    this.styles.animation = `beam ${this.getRandomFloat(8, 11)}s infinite`
    this.styles.animationDelay = `${this.getRandomFloat(2, 5)}s`
  }
}
</script>

<style lang="less">
.background-beam {
  animation-timing-function: linear;
  border-radius: 15px;
  position: absolute;
  background: linear-gradient(
    to right,
    rgba(22, 20, 121, 1),
    rgba(22, 20, 121, 0.75),
    rgba(22, 20, 121, 0.5),
    rgba(22, 20, 121, 0.25),
    rgba(22, 20, 121, 0)
  );
  left: 110%;
  &::before {
    content: '';
    box-shadow: -10px 0 25px 1px #160069;
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
