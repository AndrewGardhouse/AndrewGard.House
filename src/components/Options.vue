<template lang="html">
  <div class="options mb-auto" v-on:click="showOptions">
    <div v-if="hideOptions">
      <p class="prompt inline-block h3 mt3">Click Here To Continue</p>
    </div>
    <ul class="list-reset" v-else>
      <li class="option">
        <Link text="About"
              url="/about"></Link>
      </li>
      <li class="option">
        <Link text="Get In Touch"
              url="/contact"></Link>
      </li>
      <li class="option">
        <Link text="Resume"
              url="https://resume.creddle.io/resume/4zagtq816w4"
              :isLocal="false"></Link>
      </li>
    </ul>
  </div>
</template>

<script>
import Link from './Link';

export default {
  components: {
    Link
  },
  data() {
    return {
      hideOptions: true,
    }
  },
  methods: {
    showOptions() {
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
}
</style>
