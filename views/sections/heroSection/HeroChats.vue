<template>
  <div>
    <div v-for="(message, index) in messages" :key="index" class="chat" :class="message.sender === 'me' ? 'chat-start' : 'chat-end'">
      <div class="chat-bubble drop-shadow-md" v-html="message.message"></div>
    </div>
  </div>
</template>

<script setup>

const messages = [
  {message: 'Je m’appelle Hugo Föllmi.', sender: 'me'},
  {message: 'Et qui êtes vous ?', sender: 'you'},
  {message: 'Qui je suis ? <br> Un étudiant et vous êtes sur mon portfolio.', sender: 'me'},
  {message: 'Votre Portfolio ?', sender: 'you'},
  {message: 'Oui ici vous pourrez apprendre à me connaitre, découvrir ce que j’ai réalisé et ce qui me passionne.', sender: 'me'},
  {message: 'Et même me contacter si besoin mais avant cela je vous laisse découvrir !', sender: 'me'},
];

</script>