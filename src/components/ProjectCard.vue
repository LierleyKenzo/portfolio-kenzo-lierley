<template>
  <article class="bg-white rounded-3xl border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
    <!-- Image de couverture -->
    <div class="h-48 overflow-hidden relative bg-slate-100">
      <img :src="project.cover" :alt="project.title" class="w-full h-full object-cover" />
      <div class="absolute top-4 left-4 flex flex-wrap gap-1.5">
        <span v-for="tag in project.tags" :key="tag" class="bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] font-black uppercase text-indigo-600 shadow-xs tracking-wider">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Contenu Principal -->
    <div class="p-6 flex-1 flex flex-col justify-between">
      <div class="space-y-3">
        <h3 class="text-xl font-black text-slate-900 tracking-tight">{{ project.title }}</h3>
        <p class="text-sm text-slate-600 leading-relaxed">{{ project.description }}</p>

        <!-- Zone dépliante : En savoir plus -->
        <div v-if="isExpanded" class="pt-4 border-t border-slate-100 space-y-4 animate-fadeIn">
          <!-- Plus d'images du projet -->
          <div v-if="project.gallery && project.gallery.length" class="grid grid-cols-2 gap-2">
            <img v-for="(img, idx) in project.gallery" :key="idx" :src="img" class="w-full h-24 object-cover rounded-xl bg-slate-50" alt="Détail du projet" />
          </div>

          <p class="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
            {{ project.longDescription }}
          </p>

          <!-- Section compétences acquises -->
          <div class="space-y-2">
            <h4 class="text-xs font-black text-indigo-600 font-mono uppercase tracking-wider">Compétences acquises :</h4>
            <ul class="grid grid-cols-1 gap-1.5 text-xs text-slate-600">
              <li v-for="skill in project.acquiredSkills" :key="skill" class="flex items-center gap-2">
                <span class="material-symbols-outlined text-sm text-emerald-500 font-bold">check_circle</span>
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer de la carte fixe : Technos utilisées et Bouton d'action -->
      <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <!-- Section des technos (Icons) -->
        <div class="flex items-center gap-2">
          <span v-for="techIcon in project.techIcons" :key="techIcon" class="material-symbols-outlined text-xl text-slate-400" :title="techIcon">
            {{ techIcon }}
          </span>
        </div>

        <!-- Bouton En savoir plus -->
        <button
            @click="isExpanded = !isExpanded"
            class="inline-flex items-center gap-1 text-xs font-black font-mono text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
        >
          <span>{{ isExpanded ? 'RÉDUIRE' : 'EN SAVOIR PLUS' }}</span>
          <span class="material-symbols-outlined text-sm transition-transform duration-300" :class="{ 'rotate-180': isExpanded }">
            expand_more
          </span>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const isExpanded = ref(false)
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s ease-out forwards;
}
</style>