<template>
  <div :id="item.index" class="carousel-item relative h-96">
    <img :src="item.background" class="rounded-box"/>
    <ItemInforamtion
        :logo="item.logo"
        :name="item.name"
        :progress="item.progress"
        :comment="item.comment"
    />
  </div>
</template>
<script setup>

import ItemInforamtion from "~/views/sections/abilitySection/ItemInforamtion.vue";

defineProps({
  item: Object,
})
</script>