<template>
  <div class="about">
    <transition name="about-page-loaded" appear>
      <div class="scene">
        <div class="max-width-4 mx-auto info inline-block relative">
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
          <p class="h2 text-scroll pb4" v-if="!showBackEndCard && !showFrontEndCard">
            After that bit of shenanigans, Cool and I looked at buying another vendor set for my Shadow spec but I was having a lot of crashing issues as soon as I ported from Org to the Valley.
          </p>
          <div class="skills flex mb3" v-if="!showBackEndCard && !showFrontEndCard">
            <button class="button mx3 first" v-on:click="toggleFrontEndCard">Front-End</button>
            <button class="button mx3 second" v-on:click="toggleBackEndCard">Back-End</button>
            <router-link to="/" class="button mx3 third">Home</router-link>
          </div>
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
  data() {
    return {
      showFrontEndCard: false,
      showBackEndCard: false,
      frontEndSkills: [
        {
          type: 'VueJS',
          level: 85
        },
        {
          type: 'Charisma',
          level: 60
        },
        {
          type: 'React',
          level: 40
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
          level: 65
        },
        {
          type: 'Rails',
          level: 60
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
      .text-scroll {
        line-height: 1.5;
        overflow: hidden;
        padding: 0;
        opacity: 0;
        animation: text-scroll;
        animation-timing-function: linear;
        animation-duration: 3s;
        animation-fill-mode: forwards;
        animation-delay: 2.5s;
      }
      .skills {
        justify-content: center;
        .button {
          animation: fadein;
          animation-timing-function: linear;
          animation-duration: .75s;
          opacity: 0;
          animation-fill-mode: forwards;
          flex-grow: 1;
          flex-basis: 0;
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
    .ground {
      height: 25%;
      background-color: #000;
    }
  }
}
</style>
