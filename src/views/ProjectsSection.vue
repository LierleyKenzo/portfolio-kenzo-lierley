<template>
  <section id="projects" class="space-y-6 w-full text-left">
    <div>
      <h2 class="text-2xl font-black text-slate-900 tracking-tight">Projets Académiques</h2>
      <div class="h-1 w-10 bg-indigo-600 mt-2 rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: "Plateforme de Logistique Éco-Responsable",
    tags: ["SAÉ 3.01", "Full-Stack"],
    cover: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    description: "Développement complet d'un outil d'optimisation de stocks et de suivi de livraison pour une PME.",
    longDescription: "Ce projet intègre une gestion algorithmique poussée pour l'attribution des trajets les plus courts ainsi qu'une interface unifiée permettant de gérer les flux de marchandises en temps réel via des serveurs asynchrones.",
    acquiredSkills: ["Modélisation UML avancée", "Sécurisation des flux via tokens JWT", "Mise en place de tests unitaires structurés"],
    techIcons: ["deployed_code", "database", "terminal"],
    gallery: ["https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg", "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"]
  },
  {
    title: "Analyse Prédictive de Données Urbaines",
    tags: ["SAÉ 2.04", "Data Science"],
    cover: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    description: "Traitement analytique de jeux de données massifs pour prédire et réguler les flux de transports en commun.",
    longDescription: "Modélisation et nettoyage complet d'un dataset volumineux fourni par la métropole afin de générer des projections fiables d'affluence selon des facteurs temporels et météorologiques.",
    acquiredSkills: ["Traitement de données volumineuses (Pandas / Numpy)", "Création de tableaux de bord statistiques (DataViz)"],
    techIcons: ["data_object", "query_stats"],
    gallery: []
  }
]
</script>