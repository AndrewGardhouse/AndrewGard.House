<template lang="html">
  <div class="skill-card mb3 p2 relative">
    <p class="title h3 inline-block mt0 mb2">{{ title }}</p>
    <span class="close absolute" v-on:click="$emit(`${eventName}`)">&#x02DF;</span>
    <div class="flex skills">
      <div class="skill-names">
        <div v-for="skill in skills" class="name flex my1">
          <p class="my-auto">{{ skill.type }}</p>
        </div>
      </div>
      <div class="skill-levels ml2">
        <div v-for="skill in skills" class="skill-bar relative my1">
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
  .skill-card {
    $card-background: #282880;
    $skill-bar-corner-height: 3px;
    $skill-bar-corner-width: 4px;
    $skill-bar-border-size: 1;
    $skill-bar-border-color: #d9d9d9;

    min-width: 40vw;
    background-color: $card-background;
    border-radius: 1px;
    box-shadow: 0 0 0 3px $skill-bar-border-color,
                0 0 0 6px #283030,
                inset 0 0 0 3px #808080;
    .title {
      text-align: center;
    }
    .close {
      top: 0.5rem;
      right: 1rem;
      line-height: 1;
      height: 25px;
      font-size: 3rem;
      cursor: pointer;
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
          // border: #{$skill-bar-border-size}px solid $skill-bar-border-color;
          &::before, &::after {
            content: '';
            height: $skill-bar-corner-height;
            width: $skill-bar-corner-width;
            position: absolute;
            top: 0px;
            background-color: $card-background;
            // border-top: $card-background #{$skill-bar-border-size}px solid;
            // border-bottom: $skill-bar-border-color #{$skill-bar-border-size}px solid;
            z-index: 1
          }
          &::before {
            // border-right: $skill-bar-border-color #{$skill-bar-border-size}px solid;
            left: -#{$skill-bar-border-size}px;
          }
          &::after {
            // border-left: $skill-bar-border-color #{$skill-bar-border-size}px solid;
            right: -#{$skill-bar-border-size}px;
          }
          .bottom-corner-right, .bottom-corner-left {
            height: $skill-bar-corner-height;
            width: $skill-bar-corner-width;
            position: absolute;
            bottom: -#{$skill-bar-border-size}px;
            background-color: $card-background;
            // border-top: $skill-bar-border-color #{$skill-bar-border-size}px solid;
            // border-bottom: $card-background #{$skill-bar-border-size}px solid;
            z-index: 1
          }
          .bottom-corner-right {
            right: -#{$skill-bar-border-size}px;
            // border-left: $skill-bar-border-color #{$skill-bar-border-size}px solid;
          }
          .bottom-corner-left {
            left: -#{$skill-bar-border-size}px;
            // border-right: $skill-bar-border-color #{$skill-bar-border-size}px solid;
          }
          .fill {
            height: 100%;
            left: 0;
            background-color: $skill-bar-border-color;
            box-shadow: inset 0 0 0 3px #808080,
                        inset 0 0 0 6px #bfbfbf;
            transition: width 0.7s linear;
            width: 2%;
            transition-delay: 1s;
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
