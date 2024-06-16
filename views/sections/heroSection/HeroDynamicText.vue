<template>
  <div id="type" class="md:text-6xl text-4xl hero-dynamic-text"></div>
</template>

<script setup>
import Typewriter from 'typewriter-effect/dist/core';


onMounted(() => {
  const target = document.getElementById('type');
  const typewriter = new Typewriter(target, {
    loop: true,
    autoStart: true,
    delay: 75,
    strings: ['Bonjour', 'Hello', 'Bonsoir', 'Salut', 'Good evening', 'Good morning', 'Good afternoon', 'Konnichiwa', 'Namaste', 'Guten Tag', 'Olá', 'Ciao-ciao', 'Hallo-hallo', 'Vanakkam', 'Yia sou', 'Kamusta'],
    cursor: '_',
  });
});

</script>
<style lang="scss" scoped>

.hero-dynamic-text {
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: black !important;
}
</style>