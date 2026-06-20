<template>
  <section id="home" class="flex flex-col lg:flex-row items-center gap-12 py-8 w-full text-left">
    <!-- Photo de profil -->
    <div class="w-full lg:w-1/3 flex justify-center">
      <div class="relative group">
        <div class="absolute -inset-4 bg-indigo-500 blur-3xl opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
        <img
            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
            alt="Portrait de Kenzo"
            class="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
        />
      </div>
    </div>

    <!-- Encadré accroche de présentation -->
    <div class="w-full lg:w-2/3 space-y-6">
      <div class="space-y-2">
        <span class="text-xs font-mono font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md uppercase tracking-widest">
          Étudiant BUT Informatique
        </span>
        <h1 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Kenzo Lierley
        </h1>
      </div>

      <!-- Petit paragraphe d'accroche qui définit les objectifs -->
      <div class="p-6 md:p-8 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/50 rounded-3xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
        <p class="text-base md:text-lg text-slate-700 leading-relaxed font-normal">
          Actuellement en parcours <strong>Réalisation d'Applications</strong>, je transforme les concepts logiques en architectures web concrètes et optimisées. Passionné de programmation et rigoureux, je suis activement à la recherche d'une opportunité professionnelle (stage / alternance) pour relever de nouveaux défis applicatifs.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a href="#contact" class="bg-indigo-600 text-white text-sm px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/10">
          Me contacter
        </a>
        <a href="#contact" class="border border-slate-200 text-slate-700 text-sm px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
          Télécharger mon CV
        </a>
      </div>
    </div>
  </section>
</template>