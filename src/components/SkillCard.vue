<template>
  <div
      class="group relative w-56 h-36 bg-white rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center justify-center p-5 transition-all duration-300 hover:h-48 hover:shadow-xl hover:border-indigo-500 cursor-default flex-shrink-0"
  >
    <span
      class="mdi text-4xl text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300"
      :class="skill.icon"
    ></span>
    <span class="font-bold text-slate-800 text-sm tracking-tight">{{ skill.name }}</span>

    <!-- Texte de description apparaissant au survol (Max 2 lignes) -->
    <div class="opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300 overflow-hidden text-center mt-2 px-1">
      <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">
        {{ skill.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  }
})
</script>