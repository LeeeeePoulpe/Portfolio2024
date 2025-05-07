<template>
  <div class="flex justify-center mb-8">
    <ul class="timeline">
      <li v-for="(date, index) in dates" :key="index">
        <hr :class="index === 0 ? 'bg-transparent' : 'bg-slate-300'"/>
        <div :class="index % 2 === 0 ? 'timeline-start' : 'timeline-end'"
             class="timeline-box bg-white border border-slate-200 text-neutral-content p-3">
          <span class="font-semibold text-slate-700">{{ date.event }}</span>
        </div>
        <div class="timeline-middle">
          <div class="w-3 h-3 rounded-full bg-slate-400"></div>
        </div>
        <p :class="index % 2 === 0 ? 'timeline-end' : 'timeline-start'" class="text-slate-500 text-sm mx-2">
          {{ date.year }}
        </p>
        <hr :class="index !== dates.length - 1 ? 'bg-slate-300' : 'bg-transparent'"/>
      </li>
    </ul>
  </div>
</template>
<script setup>
const dates = [
  {year: 2022, event: 'Entrée à l’IUT'},
  {year: 2023, event: 'GameJam 2023'},
  {year: 2023, event: 'Sciconf'},
  {year: 2023, event: 'Arcsecond'},
  {year: 2024, event: 'LudoLabo'},
  {year: 2024, event: 'Carnet de stage'},
  {year: 2024, event: 'Stage ErgoGames'},
  {year: 2024, event: 'GameJam 2024'},
  {year: 2025, event: 'Alternance'},
];
</script>