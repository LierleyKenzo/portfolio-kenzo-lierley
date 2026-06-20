<template>
  <section id="skills" class="space-y-10 w-full text-left">
    <!-- En-tête unique de la section -->
    <div>
      <h2 class="text-2xl font-black text-slate-900 tracking-tight">Compétences & Stack</h2>
      <div class="h-1 w-10 bg-indigo-600 mt-2 rounded-full"></div>
    </div>

    <!-- Conteneur global des pistes de compétences -->
    <div class="space-y-8 bg-slate-50/40 border border-slate-200/50 p-6 rounded-3xl">
      <SkillCarousel
          v-for="(category, index) in skillsCategories"
          :key="category.id"
          :category-title="category.title"
          :category-data="category"
          :speed="0.5 + (index * 0.1)"
          :direction="index % 2 === 0 ? 'left' : 'right'"
      />
    </div>
  </section>
</template>

<script setup>
import SkillCarousel from '../components/SkillCarousel.vue'
// Importation directe de ton tableau exact de catégories
import { skillsCategories } from '../data/portfolioData.js'
</script>