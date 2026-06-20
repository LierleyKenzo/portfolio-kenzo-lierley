<template>
  <footer id="contact" class="border-t border-slate-200 bg-white pt-12 pb-24 md:pb-12 text-left w-full">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full">

      <div class="space-y-4">
        <h3 class="text-xs font-black font-mono text-slate-400 uppercase tracking-widest">Contact & Réseaux</h3>
        <div class="flex flex-wrap gap-6">
          <!-- Lien LinkedIn -->
          <a href="https://linkedin.com" target="_blank" class="text-sm font-bold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
            <span class="material-symbols-outlined text-lg">link</span>
            LinkedIn
          </a>
          <!-- Téléchargement CV -->
          <a href="/cv-kenzo-lierley.pdf" download class="text-sm font-bold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
            <span class="material-symbols-outlined text-lg">download</span>
            Télécharger mon CV (PDF)
          </a>
          <!-- Email direct -->
          <a href="mailto:kenzo@lierley.dev" class="text-sm font-bold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 transition-colors">
            <span class="material-symbols-outlined text-lg">mail</span>
            kenzo@lierley.dev
          </a>
        </div>
      </div>

      <div class="text-xs text-slate-400 font-mono">
        © 2026 Kenzo Lierley. Développé de manière modulaire & rigoureuse.
      </div>

    </div>
  </footer>
</template>