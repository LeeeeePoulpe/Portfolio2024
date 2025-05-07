<template>
  <div class="flex justify-center mb-8">
    <ul class="timeline">
      <li v-for="(date, index) in dates" :key="index" class="cursor-pointer" @click="handleEventClick(date.event)">
        <hr :class="[
              index === 0 ? 'bg-transparent' : (index <= currentIndex +1 && currentIndex !== -1 ? 'bg-primary' : 'bg-slate-300')
            ]"
        />
        <div :class="[
              index % 2 === 0 ? 'timeline-start' : 'timeline-end',
              index === pivotEventIndex ? 'font-bold' : ''
            ]"
             class="timeline-box bg-white border border-slate-200 text-neutral-content p-3 hover:border-primary hover:shadow-lg transition-all duration-200 ease-in-out">
          <span class="font-semibold text-slate-700">{{ date.event }}</span>
        </div>
        <div class="timeline-middle">
          <div :class="[
                'w-3 h-3 rounded-full',
                index <= currentIndex && currentIndex !== -1 ? 'bg-primary' : 'bg-slate-400',
                index === pivotEventIndex ? 'ring-2 ring-primary ring-offset-2' : ''
              ]">
          </div>
        </div>
        <p :class="index % 2 === 0 ? 'timeline-end' : 'timeline-start'" class="text-slate-500 text-sm mx-2">
          {{ date.year }}
        </p>
        <hr :class="[
              index === dates.length - 1 ? 'bg-transparent' : (index < currentIndex && currentIndex !== -1 ? 'bg-primary' : 'bg-slate-300')
            ]"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const emit = defineEmits(['event-click']);

const dates = [
  {year: 2022, event: 'Entrée à l\'IUT'},
  {year: 2023, event: 'GameJam 2023'},
  {year: 2023, event: 'Sciconf'},
  {year: 2023, event: 'Arcsecond'},
  {year: 2024, event: 'LudoLabo'},
  {year: 2024, event: 'Carnet de stage'},
  {year: 2024, event: 'Stage ErgoGames'},
  {year: 2024, event: 'GameJam 2024'},
  {year: 2025, event: 'Alternance'},
];

const currentYear = new Date().getFullYear();

const currentIndex = computed(() => {
  let lastIndex = -1;
  for (let i = dates.length - 1; i >= 0; i--) {
    if (dates[i].year <= currentYear) {
      lastIndex = i;
      break;
    }
  }
  if (lastIndex === -1 && dates.length > 0) return 0;
  return lastIndex;
});

const pivotEventIndex = computed(() => {
  let pivot = -1;
  const currentYearEvents = [];
  for (let i = 0; i < dates.length; i++) {
    if (dates[i].year === currentYear) {
      currentYearEvents.push(i);
    }
  }

  if (currentYearEvents.length > 0) {
    pivot = Math.max(...currentYearEvents);
  } else {
    return currentIndex.value;
  }
  return pivot;
});

const handleEventClick = (eventName) => {
  emit('event-click', eventName);
};
</script>