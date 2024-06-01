<template>
  <div class="flex justify-center">
    <ul class="timeline">
      <li v-for="(date, index) in dates" :key="index">
        <hr class="bg-primary"/>
        <div :class="index % 2 === 0 ? 'timeline-start' : 'timeline-end'"
             class="timeline-box text-black bg-white border-slate-300 drop-shadow-sm">
          {{ date.event }}
        </div>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
        <p :class="index % 2 === 0 ? 'timeline-end' : 'timeline-start'" class="text-black">
          {{ date.year }}
        </p>
        <hr :class="index !== dates.length - 1 ? 'bg-primary' : 'bg-slate-400'" class="drop-shadow-sm"/>
      </li>
    </ul>
  </div>
</template>
<script setup>
const dates = [
  {year: 2022, event: 'Entrée à l’IUT'},
  {year: 2022, event: 'IA de tri'},
  {year: 2022, event: 'Création BD'},
  {year: 2022, event: 'Site CGI'},
  {year: 2023, event: 'GameJam'},
  {year: 2023, event: 'Sciconf'},
  {year: 2023, event: 'Arcsecond'},
  {year: 2024, event: 'LudoLabo'},
  {year: 2024, event: 'Carnet de stage'},
  {year: 2024, event: 'Stage ErgoGames'},
];
</script>