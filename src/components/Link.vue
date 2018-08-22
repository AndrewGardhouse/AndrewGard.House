<template lang="html">
  <router-link :to="url" v-if="isLocal">
    <p @mouseover="isHovering = true"
       @mouseout="isHovering = false"
       class="my1 inline-block"
       :class="{hovering: isHovering}">
      {{ text }}
    </p>
  </router-link>
  <a :href="url" target="_blank" rel="noopener noreferrer" v-else>
    <p @mouseover="isHovering = true"
       @mouseout="isHovering = false"
       class="my1 inline-block"
       :class="{hovering: isHovering}">
      {{ text }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    isLocal: {
      default: true,
      type: Boolean
    },
    url: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      isHovering: false
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  position: relative;
  font-size: 1.25rem;
  user-select: none;
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    opacity: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 12px solid white;
    animation: rotate 1s infinite;
    transition: opacity 0.3s;
  }
}
.hovering {
  &::before {
    opacity: 1;
  }
}
</style>
