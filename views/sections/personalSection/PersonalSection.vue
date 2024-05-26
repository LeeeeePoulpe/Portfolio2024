<template>
  <div class="min-h-screen flex flex-col justify-between items-start personal-background p-6">
    <div class="mb-12">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble--full">Ici vous avez mes informations personnelles</div>
      </div>

      <div class="flex flex-col gap-5 w-full">
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            Mes informations personnelles
          </div>
          <div class="collapse-content">
            <p>Je m'appelle Hugo Föllmi, j’ai 19 ans et je suis né le 11 Novembre 2004 à Santiago du Chili</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            Mes études
          </div>
          <div class="collapse-content">
            <p>
              Pour les études on va commencer au lycée avant n'est pas très interessant. <br>
              J’ai décidé d’aller au lycée Vaucanson de Grenoble pour pouvoir m’orienter vers de l’informatique. En seconde j’avais choisi l’option SI qui m’a aidé à déterminer ce qui m’intéressais. <br>
              J'ai choisi de faire un BAC STI2D avec l'option SIN en terminale car j'aime l'informatique depuis longtemps. <br>
              <br>
              Pour donner suite au BAC STI2D je suis parti en BUT informatique à l'IUT2 de Grenoble où je suis actuellement en deuxième année, dans le parcours “Réalisation d’applications : Conception, Développement et Validation”
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            Mes passions
          </div>
          <div class="collapse-content">
            <p>
              Mes passions 😅 j'en ai plein mais faisons une liste:
            </p>
            <ul class="list-disc ml-4">
              <li>Informatique 💻</li>
              <li>Programmation 🧑‍💻</li>
              <li>Jeux vidéo 🎮</li>
              <li>Voyager ✈️</li>
              <li>Japon 🇯🇵</li>
              <li>Manga 🍥</li>
              <li>Automobile (mécanique / course) 🏎️</li>
            </ul>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            Mes compétences
          </div>
          <div class="collapse-content">
            <p>
              Parlons de mes compétences ! <br>
              Et bien à vrai dire je suis toujours en apprentissage, mais je partage avec vous la liste des compétences acquises et en cours d'acquisition. <br>
              Mais aussi les logiciels que j’ai appris à utiliser et que je maitrise.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="chat chat-start">
      <div class="chat-bubble">
        Vous avez pu lire les informations me concernant. <br>
        Maintenant je vais vous présenter les différents projets que j’ai eu l’occasion de réaliser.
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "PersonalSection"
}
</script>

<style lang="scss" scoped>
.personal-background {
  background: linear-gradient(180deg, #C5C3C3 0%, #F2F2F2 100%);
}
</style>