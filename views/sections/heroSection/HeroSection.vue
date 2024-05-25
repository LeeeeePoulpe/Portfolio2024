<template>
  <div class="h-screen flex flex-col justify-center p-3 items-center hero-background">
    <div class="flex items-center flex-wrap gap-40">
      <div class="flex flex-col gap-20">
        <div id="type" ref="homeDynamicText" class="text-6xl hero-dynamic-text"></div>
        <HeroChats/>
      </div>
      <div class="hero-logo w-80 xl:w-max">
        <img src="../../../assets/img/heroSection/Logo.png" alt="Logo de Hugo Follmi">
      </div>
    </div>
    <img src="../../../assets/img/heroSection/arrow.png" class="w-7 animate-bounce absolute bottom-10" alt="next section">
  </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import HeroChats from "~/views/sections/heroSection/HeroChats.vue";

export default {
  name: "heroSection",
  components: {HeroChats},

  mounted() {
    const target = this.$refs.homeDynamicText;

    const typewriter = new Typewriter(target, {
      loop: true,
      autoStart: true,
      delay: 75,
      strings: ['Bonjour', 'Hello', 'Bonsoir', 'Salut', 'Good evening', 'Good morning', 'Good afternoon', 'Konnichiwa', 'Namaste', 'Guten Tag', 'Olá', 'Ciao-ciao', 'Hallo-hallo', 'Vanakkam', 'Yia sou', 'Kamusta'],
      cursor: '_',
    });
  },
}
</script>


<style lang="scss" scoped>
.hero-background {
  background: radial-gradient(150.39% 106.02% at 30.73% 2.6%, #18121E 0%, #27143A 50%, #261338 100%);
}

.hero-logo {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.hero-dynamic-text {
  font-family: 'SF Pro Text',-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
  color: white !important;
}
</style>