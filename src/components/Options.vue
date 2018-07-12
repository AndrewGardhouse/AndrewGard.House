<template lang="html">
  <div class="options" v-on:click="showOptions">
    <div v-if="hideOptions">
      <p class="prompt">Click Here To Continue</p>
    </div>
    <ul v-else>
      <li class="option">
        <router-link to="/about">
          <p @mouseover="isAboutHovering = true"
             @mouseout="isAboutHovering = false"
             :class="{hovering: isAboutHovering}">
            About
          </p>
        </router-link>
      </li>
      <li class="option">
        <router-link to="/about">
          <p @mouseover="isContactHovering = true"
             @mouseout="isContactHovering = false"
             :class="{hovering: isContactHovering}">
            Get In Touch
          </p>
        </router-link>
      </li>
      <li class="option">
        <a href="https://resume.creddle.io/resume/4zagtq816w4" target="_blank" rel="noopener noreferrer">
          <p @mouseover="isResumeHovering = true"
             @mouseout="isResumeHovering = false"
             :class="{hovering: isResumeHovering}">
            Resume
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideOptions: true,
      isAboutHovering: false,
      isContactHovering: false,
      isResumeHovering: false,
    }
  },
  methods: {
    showOptions(e) {
      console.log(e.keyCode);
      this.hideOptions = false;
    }
  }
}
</script>

<style lang="less">
@keyframes pulsate {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}

@keyframes rotate {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(180deg);
  }
}

.prompt {
  animation: pulsate 1.5s infinite;
  animation-delay: 3s;
  cursor: pointer;
}

.option {
  p {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
  }
  .hovering {
    &::before {
      content: '';
      position: absolute;
      left: -20px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 12px solid white;
      animation: rotate 1s infinite;
    }
  }
}
</style>
