<template>
  <div class="absolute transition-opacity opacity-0 hover:opacity-100 bg-black/85 w-full h-full rounded-box p-5">
    <div class="flex flex-col justify-center h-full gap-5">
      <div>
        <img :src="logo" :alt="name" class="w-16 h-16 opacity-100"/>
        <h3 class="text-white text-2xl font-bold break-words">
          {{ name }}
        </h3>
      </div>
      <div class="flex flex-row items-center gap-3 text-white">
        <progress class="progress progress-success w-56" :value="progress" max="100"></progress>
        <p>{{ progress }}%</p>
      </div>
      <p class="text-white text-lg break-words">
        {{ comment }}
      </p>
    </div>
  </div>
</template>
<script setup>

defineProps({
  logo: String,
  name: String,
  progress: Number,
  comment: String,
})

</script>