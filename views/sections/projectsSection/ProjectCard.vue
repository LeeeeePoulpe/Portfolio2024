<template>
  <div class="card w-72 bg-slate-50 shadow-md text-slate-700">
    <figure>
      <slot name="project-image"></slot>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <slot name="project-title"></slot>
        <slot name="project-badge-new"></slot>
      </h2>
      <slot name="project-description"></slot>
      <div class="card-actions justify-end">
        <slot name="project-badge"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>