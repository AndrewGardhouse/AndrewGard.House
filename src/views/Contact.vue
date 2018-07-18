<template lang="html">
  <div class="contact max-width-4 mx-auto flex flex-column">
    <div class="my-auto">
      <transition name="contact-title-fade" appear>
        <h1 class="contact-title mb1">Get In Touch</h1>
      </transition>
      <transition name="form-fade" appear>
        <form class="contact-form" v-on:submit.prevent="submitForm">
          <div class="clearfix">
            <div class="input-field sm-col sm-col-12 md-col-6 px1 mb2">
              <label class="mb1" for="email">Email:</label>
              <input id="email" type="email" name="email" v-model="form.email" autofocus required />
            </div>
            <div class="input-field sm-col sm-col-12 md-col-6 px1 mb2">
              <label class="mb1" for="subject">Subject:</label>
              <input id="subject" type="text" name="subject" v-model="form.subject" />
            </div>
          </div>
          <div class="clearfix mb2">
            <div class="input-field col col-12 px1">
              <label class="mb1" for="subject">Message:</label>
              <textarea type="text" name="message" v-model="form.message" rows="12" required />
            </div>
          </div>
          <div class="clearfix mb3">
            <router-link to="/" class="button mx1">Abort</router-link>
            <button type="submit" name="submit" class="button mx1">Launch</button>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  data() {
    return {
      isHovering: false,
      form: {
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      axios.post('https://formcarry.com/s/jDkHQKrocy', qs.stringify(this.form))
      .then((res) => {
        this.form.email = '';
        this.form.subject = '';
        this.form.message = '';
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="less">
.contact-title-fade-enter-active, .contact-title-fade-leave-active {
  opacity: 0;
  animation: fadein 2s linear;
  animation-delay: 0.5s;
}

.form-fade-enter-active, .form-fade-leave-active {
  opacity: 0;
  animation: fadein 0.5s linear;
  animation-delay: 1s;
}

.contact {
  height: 100vh;
  position: relative;
  z-index: 2;
  .contact-title {
    text-align: center;
    margin-top: auto;
    font-size: 4rem;
  }
  .contact-form {
    .input-field {
      display: flex;
      text-align: left;
      flex-direction: column;
      input, textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: rgba(0, 0, 0, 0.9);
        box-shadow: none;
        border: 3px white solid;
        color: white;
        padding: 1rem;
        font-family: 'Press Start 2P';
        resize: none;
        transition: border 0.7s;
        &:focus {
          outline: none;
          border-color: rgba(0, 249, 185, 1);
        }
      }
    }
  }
}
</style>
