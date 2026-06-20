<template>
  <div class="relative w-full overflow-hidden py-3">
    <!-- Titre de la catégorie de ton fichier de données -->
    <h3 class="text-xs font-black text-slate-400 font-mono uppercase tracking-wider mb-4 pl-1 flex items-center gap-2">
      <span class="mdi mdi-circle-medium text-indigo-500"></span>
      {{ categoryTitle }}
    </h3>

    <!-- Piste de défilement native et infinie -->
    <div
        ref="carouselTrack"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
        @touchstart="isPaused = true"
        @touchend="isPaused = false"
        class="flex gap-4 overflow-x-auto hide-scrollbar select-none w-full"
        style="scroll-behavior: auto;"
    >
      <!-- On fusionne et on quadruple les éléments (languages, frameworks, tools) pour garantir la continuité infinie -->
      <div
          v-for="(item, index) in [...allItems, ...allItems, ...allItems, ...allItems]"
          :key="index"
          class="group relative w-48 h-20 bg-white rounded-xl shadow-xs border border-slate-200/60 flex items-center gap-3 px-4 transition-all duration-300 hover:shadow-md hover:border-indigo-500 cursor-default flex-shrink-0"
      >
        <!-- Badge icône MDI dynamique basé sur le nom du techno ou générique -->
        <div class="p-2 bg-slate-50 rounded-lg text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
          <span class="mdi text-xl" :class="getIconClass(item)"></span>
        </div>

        <span class="font-bold text-slate-800 text-xs tracking-tight">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  categoryTitle: String,
  categoryData: {
    type: Object,
    required: true
  },
  speed: {
    type: Number,
    default: 0.6
  },
  direction: {
    type: String,
    default: 'left'
  }
})

const carouselTrack = ref(null)
const isPaused = ref(false)
let animationFrameId = null

// Regroupe tous les éléments de la catégorie (langages + frameworks + outils + hardware) dans un seul tableau
const allItems = computed(() => {
  const data = props.categoryData
  return [
    ...(data.languages || []),
    ...(data.frameworks || []),
    ...(data.tools || []),
    ...(data.hardware || []),
    ...(data.protocols || []),
    ...(data.methodologies || [])
  ]
})

// Mappe intelligemment les noms de tes technos vers des icônes MDI valides
const getIconClass = (name) => {
  const lower = name.toLowerCase()
  if (lower.includes('vue')) return 'mdi-vuejs'
  if (lower.includes('symfony')) return 'mdi-symfony'
  if (lower.includes('php')) return 'mdi-language-php'
  if (lower.includes('java') && !lower.includes('script')) return 'mdi-language-java'
  if (lower.includes('kotlin')) return 'mdi-android'
  if (lower.includes('python')) return 'mdi-language-python'
  if (lower.includes('javascript')) return 'mdi-language-javascript'
  if (lower.includes('tailwind')) return 'mdi-tailwind'
  if (lower.includes('sql')) return 'mdi-database'
  if (lower.includes('git')) return 'mdi-git'
  if (lower.includes('figma')) return 'mdi-figma'
  if (lower.includes('docker')) return 'mdi-docker'
  if (lower.includes('bash') || lower.includes('commande')) return 'mdi-terminal'
  if (lower.includes('c++')) return 'mdi-language-cpp'
  if (lower.includes('c')) return 'mdi-language-c'
  return 'mdi-code-tags' // Icône par défaut
}

const updateScroll = () => {
  if (!carouselTrack.value) return

  if (!isPaused.value) {
    const step = props.speed
    const oneFourth = carouselTrack.value.scrollWidth / 4

    if (props.direction === 'left') {
      carouselTrack.value.scrollLeft += step
      if (carouselTrack.value.scrollLeft >= oneFourth * 2) {
        carouselTrack.value.scrollLeft -= oneFourth
      }
    } else {
      carouselTrack.value.scrollLeft -= step
      if (carouselTrack.value.scrollLeft <= oneFourth) {
        carouselTrack.value.scrollLeft += oneFourth
      }
    }
  }

  animationFrameId = requestAnimationFrame(updateScroll)
}

onMounted(() => {
  if (carouselTrack.value) {
    carouselTrack.value.scrollLeft = carouselTrack.value.scrollWidth / 4
  }
  updateScroll()
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>