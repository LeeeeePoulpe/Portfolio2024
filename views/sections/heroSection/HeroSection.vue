<template>
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