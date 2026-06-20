<template>
  <div class="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
    <div class="space-y-3">
      <!-- Image associée à la mission -->
      <div class="h-32 rounded-xl bg-slate-50 overflow-hidden border border-slate-100">
        <img v-if="mission.image" :src="mission.image" :alt="mission.title" class="w-full h-full object-cover" />
        <div v-else class="w-full h-full flex items-center justify-center text-slate-300">
          <span class="material-symbols-outlined text-4xl">task</span>
        </div>
      </div>

      <h4 class="font-bold text-slate-900 text-base tracking-tight">{{ mission.title }}</h4>
      <p class="text-xs text-slate-600 leading-relaxed">{{ mission.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mission: {
    type: Object,
    required: true
  }
})
</script>