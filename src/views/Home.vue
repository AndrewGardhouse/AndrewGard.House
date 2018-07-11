<template lang="html">
  <div class="container">
    <div class="title">
      <h1>ANDREW GARDHOUSE</h1>
      <p>Web Developer</p>
    </div>
    <div class="options">
      <ul>
        <li>
          <router-link to="/about">
            <p>
              About
            </p>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <p>
              Get In Touch
            </p>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <p>
              Resume
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
.title, .options {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
}
.title {
  margin-top: auto;
  h1 {
    font-size: 6rem;
    margin-bottom: 0;
  }
  p {
    font-size: 2rem;
    margin-top: 1rem;
  }
}
.options {
  margin-top: 1.5rem;
  margin-bottom: auto;
  ul {
    list-style: none;
    padding: 0;
  }
  p {
    font-size: 1.25rem;
  }
}
</style>
