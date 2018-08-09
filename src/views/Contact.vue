<template lang="html">
  <div class="contact" v-bind:class="{ 'form-submitted': formSubmitted }">
    <div class="wrapper max-width-4 mx-auto flex flex-column">
      <transition name="contact-title-fade" mode="in-out" appear>
        <h1 class="title mb3 mt-auto" v-if="!formSubmitted">Get In Touch</h1>
      </transition>
      <transition name="thank-you-fade" appear>
        <div class="thank-you my-auto" v-if="formSubmitted">
          <div class="clearfix">
            <div class="col col-12 px1">
              <p class="title">
                Thank you for reaching out!
              </p>
              <p class="h2">
                I appreciate you contacting me! I will make sure to get back to you shortly.
              </p>
              <p class="h2">
                Have a great day!
              </p>
              <router-link to="/" class="button inline-block">Back To The Start Menu</router-link>
            </div>
          </div>
        </div>
      </transition>
      <transition name="form-fade" appear>
        <form class="contact-form mb-auto" v-on:submit.prevent="submitForm" v-if="!formSubmitted">
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
          <div class="clearfix">
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
      formSubmitted: false,
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
        this.formSubmitted = true;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss">
.form-submitted {
  animation: light-flash 1.5s linear;
}

.contact-title-fade-enter-active {
  opacity: 0;
  animation: fadein 2s linear;
  animation-delay: 0.5s;
}

.form-fade-enter-active {
  opacity: 0;
  animation: fadein 0.5s linear;
  animation-delay: 1s;
}

.thank-you-fade-enter-active {
  opacity: 0;
  animation: fadein 2s linear;
  animation-delay: 1s;
}

.contact-title-fade-leave-to, .contact-title-fade-leave-active, .form-fade-leave-to, .form-fade-leave-active {
  display: none;
}

.contact {
  height: 100vh;
  position: relative;
  z-index: 2;
  .wrapper {
    height: 100%;
  }
  .title {
    text-align: center;
    margin-top: auto;
    font-size: 4rem;
    line-height: 1;
  }
  .thank-you {
    p {
      line-height: 1.2;
      &.title {
        font-size: 3rem;
      }
    }
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
        transition: border 0.5s;
        &:focus {
          outline: none;
          border-color: rgba(0, 249, 185, 1);
        }
      }
    }
  }
}
</style>
