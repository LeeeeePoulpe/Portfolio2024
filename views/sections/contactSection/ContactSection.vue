<template>
  <div class="flex justify-between flex-col md:flex-row">
    <div class="flex flex-col justify-between p-5 pb-10 gap-12 bg-slate-100 md:max-w-[37.5rem] md:rounded-r-xl">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble--full drop-shadow-md">
          Vous voilà déjà arrivé dans la dernière partie de mon portfolio !
        </div>
      </div>
      <div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble--full drop-shadow-md">
            Si vous avez des questions ou si vous voulez me contacter, n’hésitez pas à
            <a href="mailto:hugofollmi@gmail.com" class="link link-warning no-underline">m’envoyer un mail</a>
            ou à me contacter sur
            <a href="https://www.linkedin.com/in/hugo-follmi-71a971214/" class="link link-info no-underline">LinkedIn</a>
            ou
            <a href="https://github.com/LeeeeePoulpe" class="link link-error no-underline">GitHub</a>.
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble--full drop-shadow-md">
            Voilà vous avez pu me rencontrer à travers mon portfolio, j’espère que cela vous a plu !
            <br>
            Bonne journée et à bientôt si vous m’avez contacté !
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex flex-col items-center gap-5 z-10 self-center flex-grow p-5 rounded-xl text-nowrap">
      <a href="https://drive.google.com/file/d/1Z7df9xxQpw_vk-2CUFr4-G29iR-CoLna/view" role="button" class="btn bg-white/30 transition-colors glass btn-success border-none text-xl">Mon CV au besoin</a>
      <a href="https://github.com/LeeeeePoulpe" role="button" class="btn bg-white/30 border-none glass btn-error text-xl">Git Hub</a>
      <a href="https://www.linkedin.com/in/hugo-follmi-71a971214/" role="button" class="btn glass bg-white/30 border-none btn-info text-xl">linkedin</a>
      <a href="mailto:hugofollmi@gmail.com" role="button" class="btn btn-outline btn-warning glass bg-white/10 shadow-md text-xl">Envoyez moi un mail !</a>
      <div class="absolute top-0 w-full h-full rounded-xl -z-10 bg-white/20 blur-xl"></div>
    </div>
  </div>
</template>