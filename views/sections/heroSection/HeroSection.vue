<template>
  <div role="alert" class="alert alert-warning">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>Le site est en cours de développement, certaines parties ne fonctionnent pas correctement</span>
  </div>
  <div class="h-screen flex flex-col justify-start sm:justify-center items-center hero-background p-3">
    <div class="flex items-center justify-center gap-40">
      <div class="flex flex-col gap-12 md:gap-20">
        <HeroDynamicText/>
        <HeroChats/>
      </div>
      <client-only>
        <div v-if="isDesktop" class="w-80 xl:w-4/12">
          <img src="../../../assets/img/heroSection/Logo.png" alt="Logo de Hugo Follmi">
        </div>
      </client-only>
    </div>
    <img src="../../../assets/img/heroSection/arrow.png" class="w-7 animate-bounce absolute bottom-10" alt="next section">
  </div>
</template>

<script setup>
import HeroChats from "~/views/sections/heroSection/HeroChats.vue";
import HeroDynamicText from "~/views/sections/heroSection/HeroDynamicText.vue";

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

const isDesktop = computed(() => windowWidth.value > 1100);
</script>


<style lang="scss" scoped>
.hero-background {
  background: radial-gradient(150.39% 106.02% at 30.73% 2.6%, #18121E 0%, #27143A 50%, #261338 100%);
}
</style>