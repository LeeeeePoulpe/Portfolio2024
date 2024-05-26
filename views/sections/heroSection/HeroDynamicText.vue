<template>
  <div id="type" ref="homeDynamicText" class="md:text-6xl text-4xl hero-dynamic-text"></div>
</template>
<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  name: 'HeroDynamicText',

  mounted() {
    const target = this.$refs.homeDynamicText;

    const typewriter = new Typewriter(target, {
      loop: true,
      autoStart: true,
      delay: 75,
      strings: ['Bonjour', 'Hello', 'Bonsoir', 'Salut', 'Good evening', 'Good morning', 'Good afternoon', 'Konnichiwa', 'Namaste', 'Guten Tag', 'Olá', 'Ciao-ciao', 'Hallo-hallo', 'Vanakkam', 'Yia sou', 'Kamusta'],
      cursor: '_',
    });
  }
}
</script>
<style lang="scss" scoped>

.hero-dynamic-text {
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: white !important;
}
</style>