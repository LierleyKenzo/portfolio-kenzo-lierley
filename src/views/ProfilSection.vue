<template>
  <section id="profil" class="scroll-mt-24 bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-100/40 w-full text-left">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">

      <!-- Colonne Gauche : Mon Parcours & Soft Skills (Prend 2 colonnes sur 3) -->
      <div class="lg:col-span-2 space-y-6">
        <div>
          <span class="text-xs font-mono font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md uppercase tracking-widest">
            Mon Profil
          </span>
          <h2 class="text-2xl font-black text-slate-900 tracking-tight mt-3">
            À propos de moi
          </h2>
        </div>

        <p class="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
          Passionné par l'ingénierie logicielle, j'ai développé au cours de mon cursus au sein du BUT Informatique une forte rigueur méthodologique et un attrait prononcé pour la résolution de problèmes complexes. Au-delà des lignes de code, j'attache une grande importance à la qualité de l'architecture logicielle et à la maintenabilité des applications que je conçois.
        </p>

        <!-- Liste des Soft-Skills -->
        <div class="pt-4 space-y-3">
          <h4 class="text-xs font-black text-slate-400 font-mono uppercase tracking-wider">Aptitudes professionnelles</h4>
          <div class="flex flex-wrap gap-2">
            <span class="bg-slate-50 text-slate-700 border border-slate-200/60 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm text-indigo-600">psychology</span> Autonomie & Veille
            </span>
            <span class="bg-slate-50 text-slate-700 border border-slate-200/60 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm text-indigo-600">groups</span> Esprit d'équipe (Scrum)
            </span>
            <span class="bg-slate-50 text-slate-700 border border-slate-200/60 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm text-indigo-600">construction</span> Rigueur & Clean Code
            </span>
          </div>
        </div>
      </div>

      <!-- Colonne Droite : Indicateurs Universitaires / Statistiques -->
      <div class="bg-slate-50/60 border border-slate-200/60 p-6 rounded-2xl space-y-4 w-full h-full flex flex-col justify-between">
        <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider font-mono">
          Cursus Universitaire
        </h3>

        <div class="space-y-4 flex-1 flex flex-col justify-center">
          <div class="border-b border-slate-200 pb-3 flex justify-between items-center">
            <span class="text-xs text-slate-500 font-medium">Diplôme préparé</span>
            <span class="text-xs font-black text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded">BUT 3</span>
          </div>
          <div class="border-b border-slate-200 pb-3 flex justify-between items-center">
            <span class="text-xs text-slate-500 font-medium">Spécialité</span>
            <span class="text-xs font-black text-slate-700">Dév. Applications</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-xs text-slate-500 font-medium">Localisation</span>
            <span class="text-xs font-black text-slate-700 flex items-center gap-1">
              <span class="material-symbols-outlined text-xs text-rose-500">location_on</span> France
            </span>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-200 text-[11px] font-mono font-bold text-slate-400 text-center">
          Dernière année de cycle universitaire
        </div>
      </div>

    </div>
  </section>
</template>