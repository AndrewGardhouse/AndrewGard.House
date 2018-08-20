<template lang="html">
  <div class="options mb-auto" v-on:click="showOptions">
    <div v-if="hideOptions">
      <p class="prompt inline-block h3 mt3">Click Here To Continue</p>
    </div>
    <ul class="list-reset" v-else>
      <li class="option">
        <router-link to="/about">
          <p @mouseover="isAboutHovering = true"
             @mouseout="isAboutHovering = false"
             class="my1 inline-block"
             :class="{hovering: isAboutHovering}">
            About
          </p>
        </router-link>
      </li>
      <li class="option">
        <router-link to="/contact">
          <p @mouseover="isContactHovering = true"
             @mouseout="isContactHovering = false"
             class="my1 inline-block"
             :class="{hovering: isContactHovering}">
            Get In Touch
          </p>
        </router-link>
      </li>
      <li class="option">
        <a href="https://resume.creddle.io/resume/4zagtq816w4" target="_blank" rel="noopener noreferrer">
          <p @mouseover="isResumeHovering = true"
             @mouseout="isResumeHovering = false"
             class="mt1 mb0 inline-block"
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
      this.hideOptions = false;
    }
  }
}
</script>

<style lang="scss">
.options {
  .prompt {
    animation: pulsate 1.5s infinite;
    animation-delay: 3s;
    cursor: pointer;
  }
  .option {
    p {
      position: relative;
      font-size: 1.25rem;
      user-select: none;
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
}
</style>
