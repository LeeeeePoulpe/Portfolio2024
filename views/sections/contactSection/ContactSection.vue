<template>
  <div class="flex flex-col px-3 gap-20 pt-5 pb-10">
    <div class="chat chat-start">
      <div class="chat-bubble">
        Vous voilà déjà arrivé dans la dernière partie de mon portfolio !
      </div>
    </div>

    <div class="flex flex-col items-center gap-10 self-center">
      <div class="flex flex-row gap-10">
        <a href="https://drive.google.com/file/d/1Z7df9xxQpw_vk-2CUFr4-G29iR-CoLna/view" role="button" class="btn bg-white/40 transition-colors btn-success border-none text-xl">Mon CV au besoin</a>
        <a href="https://github.com/LeeeeePoulpe" role="button" class="btn bg-white/40 border-none btn-error text-xl">Git Hub</a>
        <a href="https://www.linkedin.com/in/hugo-follmi-71a971214/" role="button" class="btn bg-white/40 border-none btn-info text-xl">linkedin</a>
      </div>
      <div class="chat-bubble chat-bubble--transparent">
        <p class="opacity-100">Vous avez pu voir mes réseaux et ci-dessous je vous mets mon mail si vous voulez me contacter ou si vous avez des questions.</p>
      </div>
      <a href="mailto:hugofollmi@gmail.com" role="button" class="btn btn-outline btn-warning glass shadow-md text-xl w-1/3">Envoyez moi un mail !</a>
    </div>

    <div class="chat chat-start">
      <div class="chat-bubble">
        Voilà vous avez pu me rencontrer à travers mon portfolio, j’espère que cela vous a plu !
        <br>
        Bonne journée et à bientôt si vous m’avez contacté !
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.chat-bubble--transparent {
  background-color: white !important;
  opacity: 0.4;
  color: black;
  border: 1px solid white;
}
</style>