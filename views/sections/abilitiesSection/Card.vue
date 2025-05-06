<template>
  <div
    class="relative bg-white rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col shadow-md hover:shadow-lg"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="p-6 flex-1 flex flex-col items-center justify-center">
      <div
        class="flex items-center justify-center transition-all duration-300"
        :class="isHovered ? 'w-16 h-16 mb-3' : 'w-20 h-20 mb-4'"
      >
        <img
          :src="item.logo"
          :alt="item.name"
          class="max-w-full max-h-full object-contain"
        />
      </div>

      <h3
        class="text-center transition-all duration-300"
        :class="isHovered ? 'text-lg font-semibold' : 'text-xl font-semibold'"
      >
        {{ item.name }}
      </h3>

      <div
        class="w-full transition-all duration-300 overflow-hidden"
        :class="isHovered ? 'max-h-32 opacity-100 mt-3' : 'max-h-0 opacity-0'"
      >
        <p class="text-gray-600 text-sm px-4 text-center">
          {{ item.comment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  item: Object,
});

const isHovered = ref(false);
</script>
