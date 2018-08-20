<template lang="html">
  <div class="skill-card mb4 md-mb3 mx-auto p2 relative">
    <p class="title h3 inline-block m0">{{ title }}</p>
    <span class="close absolute" v-on:click="$emit(`${eventName}`)">x</span>
    <div class="flex skills">
      <div class="skill-names">
        <div v-for="skill in skills" class="name flex mt2">
          <p class="my-auto">{{ skill.type }}</p>
        </div>
      </div>
      <div class="skill-levels ml2">
        <div v-for="skill in skills" class="skill-bar relative mt2">
          <span class="fill absolute" :style="`width: ${skill.level}%;`"></span>
          <span class="absolute bottom-corner-left"></span>
          <span class="absolute bottom-corner-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    },
    eventName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "../assets/breakpoints";

.skill-card {
  $card-background: #282880;
  $skill-bar-corner-height: 3px;
  $skill-bar-corner-width: 4px;
  $skill-bar-border-size: 1;
  $skill-bar-border-color: #d9d9d9;

  width: 85vw;
  background-color: $card-background;
  border-radius: 1px;
  box-shadow: 0 0 0 3px $skill-bar-border-color,
              0 0 0 6px #283030,
              inset 0 0 0 3px #808080;

  @media #{$breakpoint-md} {
    width: 40vw;
  }
  &.fade-in-enter-active, &.fade-in-leave-active {
    transition: all 0.7s linear;
    opacity: 1;
  }
  &.fade-in-enter, &.fade-in-leave-to {
    opacity: 0;
  }
  .title {
    text-align: center;
  }
  .close {
    top: 0.7rem;
    right: 0.7rem;
    font-size: 1.2rem;
    cursor: pointer;
    user-select: none;
  }
  .skills {
    .skill-names {
      .name {
        min-height: 20px;
        p {
          text-align: left;
        }
      }
    }
    .skill-levels {
      flex: 1;
      .skill-bar {
        width: 100%;
        height: 20px;
        background: #000;
        &::before, &::after {
          content: '';
          height: $skill-bar-corner-height;
          width: $skill-bar-corner-width;
          position: absolute;
          top: 0px;
          background-color: $card-background;
          z-index: 1
        }
        &::before {
          left: -#{$skill-bar-border-size}px;
        }
        &::after {
          right: -#{$skill-bar-border-size}px;
        }
        .bottom-corner-right, .bottom-corner-left {
          height: $skill-bar-corner-height;
          width: $skill-bar-corner-width;
          position: absolute;
          bottom: -#{$skill-bar-border-size}px;
          background-color: $card-background;
          z-index: 1
        }
        .bottom-corner-right {
          right: -#{$skill-bar-border-size}px;
        }
        .bottom-corner-left {
          left: -#{$skill-bar-border-size}px;
        }
        .fill {
          height: 100%;
          left: 0;
          background-color: $skill-bar-border-color;
          transition: width 0.7s linear;
          width: 2%;
          transition-delay: 1s;
          box-shadow: inset 0 0 0 3px #808080,
                      inset 0 0 0 6px #bfbfbf;
          &::before, &::after {
            content: '';
            background-color: #000;
            position: absolute;
            right: 0;
            height: $skill-bar-corner-height;
            width: $skill-bar-corner-width;
          }
          &::before {
            top: 0;
          }
          &::after {
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
