<template>
  <div class="h-screen flex flex-col justify-center p-3 items-center home-bg">
    <div class="flex items-center flex-wrap gap-40">
      <div class="flex flex-col gap-20">
        <div id="type" ref="homeDynamicText" class="text-6xl home-dynamic-text"></div>
        <div>
          <div class="chat chat-start">
            <div class="chat-bubble">Je m’appelle Hugo Föllmi</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-bubble">Et qui êtes vous ?</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-bubble">Qui je suis ? <br> Un étudiant et vous êtes sur mon portfolio.</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-bubble">Votre Portfolio ?</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-bubble">Oui ici vous pourrez apprendre à me connaitre, ce que j’ai réalisé et ce qui me
              passionne
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-bubble">Et même me contacter si besoin mais avant cela je vous laisse découvrir !
            </div>
          </div>
        </div>
      </div>
      <div class="home-logo w-80 xl:w-max">
        <img src="../assets/img/home/Logo.png" alt="Logo de Hugo Follmi">
      </div>
    </div>
    <img src="../assets/img/home/arrow.png" class="w-7 animate-bounce absolute bottom-10" alt="next section">
  </div>
</template>


<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  name: "homePage",

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
.home-bg {
  background: radial-gradient(150.39% 106.02% at 30.73% 2.6%, #18121E 0%, #27143A 50%, #261338 100%);
}

.home-logo {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.chat-bubble {
  max-width: 70%;
  text-wrap: auto;
  background-color: white;
  color: black;
}

.home-dynamic-text {
  font-family: 'SF Pro Text',-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
  color: white !important;
}
</style>