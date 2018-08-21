<template>
  <div class="about">
    <transition name="about-page-loaded" appear>
      <div class="scene">
        <div class="max-width-4 info">
          <transition name="fade-in" mode="out-in">
            <div class="detail-wrapper" v-if="!showBackEndCard && !showFrontEndCard">
              <p class="text" :class="{ 'text-scroll': hasInitialPageLoadAnimation }">
                In the midst of chaos, a digital nomad on a quest to use his abilities to help bring peace to the world and level up and learn new skills.
              </p>
              <div class="skills clearfix mb2">
                <div class="col col-12 md-col-4 flex px1 mb1">
                  <button class="button first"
                          :class="{ 'fadein': hasInitialPageLoadAnimation }"
                          v-on:click="toggleFrontEndCard">Front-End</button>
                </div>
                <div class="col col-12 md-col-4 flex px1 mb1">
                  <button class="button second"
                          :class="{ 'fadein': hasInitialPageLoadAnimation }"
                          v-on:click="toggleBackEndCard">Back-End</button>
                </div>
                <div class="col col-12 md-col-4 flex px1 mb1">
                  <router-link to="/" class="button third"
                               :class="{ 'fadein': hasInitialPageLoadAnimation }">Home</router-link>
                </div>
              </div>
            </div>
            <SkillCard
              title="Front-End"
              :skills="frontEndSkills"
              eventName="toggleFrontEnd"
              v-if="showFrontEndCard"
              v-on:toggleFrontEnd="toggleFrontEndCard"></SkillCard>
            <SkillCard
              title="Back-End"
              :skills="backEndSkills"
              eventName="toggleBackEnd"
              v-if="showBackEndCard"
              v-on:toggleBackEnd="toggleBackEndCard"></SkillCard>
          </transition>
        </div>
        <Character></Character>
        <div class="ground"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Character from '../components/Character'
import SkillCard from '../components/SkillCard'

export default {
  components: {
    Character,
    SkillCard
  },
  mounted() {
    setTimeout(() => {
      this.hasInitialPageLoadAnimation = false;
    }, 7000);
  },
  data() {
    return {
      showFrontEndCard: false,
      showBackEndCard: false,
      hasInitialPageLoadAnimation: true,
      frontEndSkills: [
        {
          type: 'VueJS',
          level: 80
        },
        {
          type: 'Willpower',
          level: 98
        },
        {
          type: 'React',
          level: 40
        },
        {
          type: 'Perception',
          level: 90
        },
        {
          type: 'Angular',
          level: 50
        }
      ],
      backEndSkills: [
        {
          type: 'Express',
          level: 85
        },
        {
          type: 'Laravel',
          level: 30
        },
        {
          type: 'Luck',
          level: 95
        },
        {
          type: 'Rails',
          level: 60
        },
        {
          type: 'Resilience',
          level: 98
        }
      ]
    }
  },
  methods: {
    toggleFrontEndCard() {
      this.showFrontEndCard = !this.showFrontEndCard;
    },
    toggleBackEndCard() {
      this.showBackEndCard = !this.showBackEndCard;
    }
  }
}
</script>

<style lang="scss">
@import "../assets/breakpoints";

.about-page-loaded-enter-active {
  animation: about-page-loaded 2.5s linear;
}

.about {
  height: 100vh;
  position: relative;
  z-index: 5;
  animation: light-flash 1.5s linear;
  .scene {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    top: 0%;
    .info {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      @media #{$breakpoint-md} {
        margin-left: auto;
        margin-right: auto;
      }
      .detail-wrapper {
        &.fade-in-enter-active, &.fade-in-leave-active {
          transition: all 0.7s linear;
          opacity: 1;
        }
        &.fade-in-enter, &.fade-in-leave-to {
          opacity: 0;
        }
        .text {
          line-height: 1.5;
          overflow: hidden;
          padding: 0;
          @media #{$breakpoint-md} {
            font-size: 1.5rem
          }
          &.text-scroll {
            animation: text-scroll;
            animation-timing-function: linear;
            animation-duration: 3s;
            animation-fill-mode: forwards;
            animation-delay: 2.5s;
            opacity: 0;
          }
        }
        .skills {
          .button {
            flex: 1;
            width: 100%;
            &.fadein {
              animation: fadein;
              animation-timing-function: linear;
              animation-duration: .75s;
              animation-fill-mode: forwards;
              opacity: 0;
            }
            &.first {
              animation-delay: 4s;
            }
            &.second {
              animation-delay: 4.5s;
            }
            &.third {
              animation-delay: 5s;
            }
          }
        }
      }
    }
    .ground {
      height: 12.5%;
      background-color: #000;
      animation-duration: 3s;
      @media #{$breakpoint-md} {
        height: 25%;
      }
    }
  }
}
</style>
