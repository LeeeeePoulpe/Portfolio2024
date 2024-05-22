<template>
  <div class="h-screen flex flex-col flex-wrap justify-center px-3 items-center home-bg">
    <div class="flex justify-center flex-wrap gap-20">
      <div class="home-logo w-80">
        <img src="../assets/img/home/Logo.svg" alt="Logo de Hugo Follmi">
      </div>
      <div>
        <div class="chat chat-start">
          <div class="chat-bubble">Hello je m’appelle Hugo Föllmi</div>
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
      </div>
    </div>
    <div class="divider"></div>
    <div>
      <div class="chat chat-end">
        <div class="chat-bubble">Mais votre portoflio est vide ?</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-bubble">Oui effectivement le site est en cours de développement, en attendant je vous à
          disposition de quoi me contacter sociaux et mon CV
        </div>
      </div>
    </div>
    <div class="flex gap-5 mt-5">
      <a href="https://drive.usercontent.google.com/u/2/uc?id=1Z7df9xxQpw_vk-2CUFr4-G29iR-CoLna&export=download" role="button" class="btn btn-outline btn-success">Mon CV au besoin</a>
      <a href="https://github.com/LeeeeePoulpe" role="button" class="btn btn-outline">Git Hub</a>
      <a href="https://www.linkedin.com/in/hugo-follmi-71a971214/" role="button" class="btn btn-outline btn-info">Mon linkedin</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InDevPage"
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
</style>