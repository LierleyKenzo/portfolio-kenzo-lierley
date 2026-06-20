<template>
  <div class="w-full min-h-screen bg-slate-50/40 text-slate-800 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">

    <!-- Barre de navigation fixe supérieure -->
    <header class="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50 flex items-center justify-between px-6 md:px-16 shadow-xs">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-indigo-600 font-bold">terminal</span>
        <span class="text-base font-black text-slate-900 tracking-tight">Kenzo Lierley</span>
      </div>

      <nav class="hidden md:flex items-center space-x-8 text-xs font-bold text-slate-500 tracking-wide uppercase">
        <a href="#home" class="hover:text-indigo-600 transition-colors">Accueil</a>
        <a href="#profil" class="hover:text-indigo-600 transition-colors">Profil</a>
        <a href="#skills" class="hover:text-indigo-600 transition-colors">Compétences</a>
        <a href="#projects" class="hover:text-indigo-600 transition-colors">Projets</a>
        <a href="#experience" class="hover:text-indigo-600 transition-colors">Expérience</a>
        <a href="#contact" class="hover:text-indigo-600 transition-colors">Contact</a>
      </nav>
    </header>

    <!-- Zone principale contenant les sections structurées -->
    <main class="pt-24 w-full max-w-[1200px] mx-auto px-6 md:px-12 space-y-24 pb-12">
      <HeroSection />
      <!-- Ajout propre de la section Profil -->
      <ProfilSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

  </div>
</template>

<script setup>
import HeroSection from './views/HeroSection.vue'
import ProfilSection from './views/ProfilSection.vue' // Import de la section
import SkillsSection from './views/SkillsSection.vue'
import ProjectsSection from './views/ProjectsSection.vue'
import ExperienceSection from './views/ExperienceSection.vue'
import ContactSection from './views/ContactSection.vue'
</script>