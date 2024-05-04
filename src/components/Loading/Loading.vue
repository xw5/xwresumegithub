<template>
  <div class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black" :class="leaving" v-if="isLoading">
    <svg width="200" height="200" class="w-[100px] h-[100px] max-[750px]:w-[1rem] max-[750px]:h-[1rem]" viewBox="0 0 50 50">
      <circle 
        cx="25" 
        cy="25" 
        r="22" 
        fill="none"
        stroke="#3be6cb"
        stroke-width="3"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <animateTransform 
          attributeName="transform"
          type="rotate"
          values="0 25 25;360 25 25"
          dur="2s"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke"
          values="#3be6cb;#02bcf2;#3be6cb"
          dur="2s"
          repeatCount="indefinite"
        >
        </animate>
      </circle>
      <circle 
        cx="25" 
        cy="25" 
        r="12" 
        fill="none" 
        stroke="#02bcf2" 
        stroke-width="3"
        stroke-dasharray="19"
        stroke-linecap="round"
      >
        <animateTransform 
          attributeName="transform"
          type="rotate"
          values="360 25 25;0 25 25"
          dur="2s"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke"
          values="#02bcf2;#3be6cb;#02bcf2;"
          dur="2s"
          repeatCount="indefinite"
        >
        </animate>
      </circle>
    </svg>
    <p class="text-[#666] text-[14px] leading-[24px] loading-text mb-[.2rem]">数据加载中...</p>
    <p class="text-[#666] text-[14px] leading-[24px] loading-text">{{ nowKnowledge.ask }}</p>
    <p class="text-[#666] text-[14px] leading-[24px] loading-text">问题答案页面内有揭晓哦！</p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '../../store/index.js';
import { pageStatus } from '../../utils/common.js';
const store = useGlobalStore();
const isLoading = ref(true);
const leaving = ref('');

const {nowKnowledge} = storeToRefs(store);
const router = useRouter();
setTimeout(() => {
  const pageType = pageStatus();
  if (pageType === 'mobile') {
    router.push({
      name: 'mobile'
    });
  } else {
    router.push({
      name: 'home'
    });
  }
  leaving.value = 'leaving';
  setTimeout(() => {
    isLoading.value = false;
  }, 400)
}, 3000);

</script>

<style scoped>
@keyframes shining {
  from {
    background-position: -200%;
  }
  to {
    background-position: 200%;
  }
}
.loading-text{
    text-shadow: 0 0 1px rgba(255,255,255,.5);
    background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 300% 100%;
    animation: shining 3s linear infinite;
}
@keyframes loadingLeave {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
.leaving{
  animation: loadingLeave .4s ease-in-out forwards;
}
</style>