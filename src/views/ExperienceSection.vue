<template>
  <section id="experience" class="bg-slate-100/60 rounded-3xl p-6 md:p-10 border border-slate-200/50 space-y-8 w-full text-left">
    <!-- En-tête de l'entreprise d'accueil -->
    <div class="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-slate-200 pb-6">
      <div class="w-20 h-20 bg-white rounded-2xl border border-slate-200 flex items-center justify-center p-3 shadow-xs shrink-0">
        <!-- Logo Entreprise -->
        <span class="material-symbols-outlined text-4xl text-indigo-600">corporate_fare</span>
      </div>
      <div class="space-y-2 flex-1">
        <h3 class="text-xl font-black text-slate-900 tracking-tight">Stage : Développeur d'Applications Backend</h3>
        <p class="text-sm font-bold text-indigo-600">@ TechSolutions Enterprise</p>
        <p class="text-xs md:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Immersion technique de 10 semaines au sein de l'équipe R&D spécialisée dans le cloud de gestion. Conception d'outils d'automatisation interne.
        </p>
        <a href="https://example.com" target="_blank" class="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline pt-1">
          Visiter le site de l'entreprise
          <span class="material-symbols-outlined text-xs">open_in_new</span>
        </a>
      </div>
    </div>

    <!-- Grille des missions -->
    <div class="space-y-3">
      <h4 class="text-xs font-black text-slate-400 font-mono uppercase tracking-wider">Missions réalisées</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <MissionCard v-for="mission in missions" :key="mission.title" :mission="mission" />
      </div>
    </div>

    <!-- Section des icônes de technos utilisées durant le stage -->
    <div class="pt-4 border-t border-slate-200/60 flex flex-col items-center sm:items-start gap-2">
      <p class="text-[10px] font-black text-slate-400 font-mono uppercase tracking-widest">Technologies utilisées en entreprise</p>
      <div class="flex gap-4">
        <span v-for="icon in stageTechs" :key="icon" class="material-symbols-outlined text-2xl text-slate-500" :title="icon">
          {{ icon }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import MissionCard from '../components/MissionCard.vue'

const missions = [
  { title: "Automatisation DevOps", description: "Écriture de processus d'automatisation d'intégration pour le déploiement sur serveurs de pré-production.", image: "" },
  { title: "Refactoring API", description: "Migration de services et endpoints monolithiques obsolètes vers des architectures découplées.", image: "" },
  { title: "Maintenance & Qualité", description: "Couverture de code par tests de non-régression et résolution de bugs applicatifs critiques.", image: "" }
]

const stageTechs = ["code", "terminal", "database", "cloud"]
</script>