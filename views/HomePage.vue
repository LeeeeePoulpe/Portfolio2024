<template>
  <HeroSection/>
  <PersonalSection/>
  <ProjectsSection/>
  <AbilitySection/>
  <ContactSection/>
</template>


<script setup>
import HeroSection from './sections/heroSection/HeroSection.vue';
import PersonalSection from './sections/personalSection/PersonalSection.vue';
import ProjectsSection from './sections/projectsSection/ProjectsSection.vue';
import AbilitySection from "~/views/sections/abilitiesSection/AbilitySection.vue";
import ContactSection from "~/views/sections/contactSection/ContactSection.vue";
</script>