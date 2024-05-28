<template>
  <div>
    <div class="chat chat-start">
      <div class="chat-bubble drop-shadow-md">Je m’appelle Hugo Föllmi</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble drop-shadow-md">Et qui êtes vous ?</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble drop-shadow-md">Qui je suis ? <br> Un étudiant et vous êtes sur mon portfolio.</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble drop-shadow-md">Votre Portfolio ?</div>
    </div>
    <div class="chat chat-start drop-shadow-md">
      <div class="chat-bubble">Oui ici vous pourrez apprendre à me connaitre, ce que j’ai réalisé et ce qui me
        passionne
      </div>
    </div>
    <div class="chat chat-start drop-shadow-md">
      <div class="chat-bubble">Et même me contacter si besoin mais avant cela je vous laisse découvrir !
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeroChats'
}
</script>
<style lang="scss" scoped>

.chat-bubble {
  max-width: 70%;
  text-wrap: auto;
  background-color: white;
  color: black;
}

</style>