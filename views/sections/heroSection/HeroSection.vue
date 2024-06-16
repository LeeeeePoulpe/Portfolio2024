<template xmlns="http://www.w3.org/1999/html">
  <div class="h-screen w-screen flex flex-col">
    <div class="flex w-full h-full justify-between items-center">
      <div class="flex flex-col justify-between h-full p-5 gap-12 md:gap-20 bg-slate-50 rounded-r-xl">
        <HeroDynamicText/>
        <HeroChats/>
        <button class="w-10 h-8 hover:drop-shadow-sm hover:scale-75 scale-50 transition-all rounded-xl text-black self-center ">
          <img src="../../../assets/img/heroSection/arrow.svg" alt="Flecha hacia abajo" class="animate-bounce">
        </button>
      </div>
      <client-only>
        <div v-if="isDesktop" class="flex xl:w-4/12 flex-grow justify-center p-5">
          <img src="../../../assets/img/heroSection/Logo.svg" alt="Logo de Hugo Follmi">
        </div>
      </client-only>
    </div>
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

const isDesktop = computed(() => windowWidth.value > 800);
</script>