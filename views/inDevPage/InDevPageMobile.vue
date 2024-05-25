<template>
  <div class="sm:h-auto md:h-screen flex flex-wrap justify-center px-3 pt-5 pb-10 items-center hero-background">
    <div class="flex flex-col items-center w-10/12">
      <div class="hero-logo w-32">
        <img src="../../assets/img/heroSection/Logo.svg" alt="Logo de Hugo Follmi">
      </div>
      <div class="divider w-11/12 mx-auto"></div>
    </div>
    <div class="flex flex-col gap-5">
      <div>
        <div class="chat chat-start">
          <div class="chat-bubble">Hello, je m’appelle Hugo Föllmi.</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble">Et qui êtes vous ?</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble">Qui je suis ? <br> Un étudiant en informatique et vous êtes sur mon portfolio.</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble">Votre Portfolio ?</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble">Oui ici vous pourrez apprendre à me connaitre, découvrir ce que j’ai réalisé et ce qui me
            passionne.
          </div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble">Mais votre portoflio est vide ?</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble">
            Oui effectivement le site est en cours de développement. Vous pouvez accéder à mon profil Linkedn,
            mon CV ainsi que mes contacts.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 my-5">
      <div class="flex flex-row gap-5">
        <a href="https://github.com/LeeeeePoulpe" role="button" class="btn btn-outline btn-error">Git Hub</a>
        <a href="https://www.linkedin.com/in/hugo-follmi-71a971214/" role="button" class="btn btn-outline btn-info">Mon linkedin</a>
      </div>
      <a href="https://drive.google.com/file/d/1Z7df9xxQpw_vk-2CUFr4-G29iR-CoLna/view" role="button" class="btn btn-outline btn-success">Mon CV au besoin</a>
      <a href="mailto:hugofollmi@gmail.com" role="button" class="btn btn-outline btn-warning">Mon mail</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InDevPageMobile"
}
</script>

<style lang="scss" scoped>
.hero-background {
  background: radial-gradient(150.39% 106.02% at 30.73% 2.6%, #18121E 0%, #27143A 50%, #261338 100%);
}

.hero-logo {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.chat-bubble {
  max-width: 70%;
  text-wrap: auto;
  background-color: white;
  color: black;
}
</style>