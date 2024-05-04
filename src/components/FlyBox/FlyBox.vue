<template>
  <div class="w-full h-full relative group/svg" ref="flybox">
    <svg v-if="uuid" class="absolute top-0 left-0 z-10 pointer-events-none" :width="containerW" :height="containerH">
      <defs>
        <path 
          :d="path"
          :id="'box-path'+uuid"
          fill="none"
        />
        <radialGradient
          :id="'radial-gradient'+uuid"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <stop offset="0" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <mask :id="'box-mask'+uuid">
          <circle r="150" cx="0" cy="0" :fill="`url(#radial-gradient${uuid})`">
            <animateMotion
              dur="3s"
              rotate="auto"
              repeatCount="indefinite"
              :path="path"
            />
          </circle>
        </mask>
      </defs>
      <use 
        :href="'#box-path'+uuid"
        stroke-width="1"
        stroke="#235fa7"
      />
      <use 
        :href="'#box-path'+uuid"
        stroke-width="3"
        stroke="#4fd2dd"
        class="hidden group-hover/svg:block svg-light"
        :mask="`url(#box-mask${uuid})`"
      />
    </svg>
    <div class="w-full h-full relative bg-[rgba(0,0,0,.6)]">
       <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { guid } from '../../utils/common.js';

const containerW = ref(0); 
const containerH = ref(0);
const flybox = ref(null);
const uuid = ref(guid());

const path = computed(() => {
  if (!containerW.value || !containerH.value) {
    return '';
  }
  return `M0 0 L${containerW.value - 0} 0 L${containerW.value - 0} ${containerH.value - 0} L0 ${containerH.value - 0} Z`
});

const screenAdaptation = () => {
  if (!flybox.value) {
    return;
  }
  containerW.value = flybox.value.offsetWidth;
  containerH.value = flybox.value.offsetHeight;
}

onMounted(() => {
  console.log('---- onMounted ----:');
  screenAdaptation();
  window.addEventListener('resize', screenAdaptation, false);
})

</script>

<style scoped>
@keyframes opa {
  0%{
    opacity: 0;
  }
  0%{
    opacity: 1;
  }
}
.svg-light{
  animation: opa .4s ease-in-out 0s 1 forwards;
}
</style>