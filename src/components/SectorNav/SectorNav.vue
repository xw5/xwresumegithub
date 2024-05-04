<template>
  <div class="w-[168px] h-[168px] flex items-center justify-center fixed top-[-84px] left-[50%] ml-[-84px] z-40 sector-wrap" @mouseleave="toggleStatus(false)" :class="isActive ? 'active' : ''">
    <span title="点点看" @click="toggleStatus()" class="iconfont setting-btn w-[64px] p-[5px] cursor-pointer rounded-[50%] overflow-hidden relative z-10 flex items-center justify-center h-[64px] bg-[rgba(255,255,255,1)] hover:text-green-500">&#xe60b;</span>
    <!-- <a href="https://gitee.com/github-9819409/xwdataboard/raw/master/docs/%E4%B8%AA%E4%BA%BA%E7%AE%80%E5%8E%86(%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91-%E8%B0%A2%E6%AD%A6202404014).pdf" target="_blank" title="下载简历" class="iconfont absolute other-btn p-[5px] cursor-pointer rounded-[50%] overflow-hidden w-[30px] h-[30px] flex items-center justify-center bg-[rgba(255,255,255,.6)]"><b>&#xe612;</b></a> -->
    <span title="珍惜时间" @click="navClick('clock')" class="iconfont absolute other-btn p-[5px] cursor-pointer rounded-[50%] overflow-hidden w-[30px] h-[30px] flex items-center justify-center bg-[rgba(255,255,255,.6)]"><b>&#xe616;</b></span>
    <span title="守护母亲地球" @click="navClick('earth')" class="iconfont absolute other-btn p-[5px] cursor-pointer rounded-[50%] overflow-hidden w-[30px] h-[30px] flex items-center justify-center bg-[rgba(255,255,255,.6)]"><b>&#xe7ea;</b></span>
    <span title="寻找真理" @click="navClick('Knowledge')" class="iconfont absolute other-btn p-[5px] cursor-pointer rounded-[50%] overflow-hidden w-[30px] h-[30px] flex items-center justify-center bg-[rgba(255,255,255,.6)]"><b>&#xe813;</b></span>
    <span v-if="!isMobile" title="强切移动端" @click="navClick('mobile')" class="iconfont absolute other-btn p-[5px] cursor-pointer rounded-[50%] overflow-hidden w-[30px] h-[30px] flex items-center justify-center bg-[rgba(255,255,255,.6)]"><b>&#xe70f;</b></span>
    <span v-else title="强切PC端" @click="navClick('pc')" class="iconfont absolute other-btn p-[5px] cursor-pointer rounded-[50%] overflow-hidden w-[30px] h-[30px] flex items-center justify-center bg-[rgba(255,255,255,.6)]"><b>&#xe614;</b></span>
  </div>
  <!-- <dialog-main ref="knowledgeDesc" :isMobile="isMobile">
    <div class="w-full flex flex-col workexprience-con" v-if="nowKnowledge">
      <h3 class="text-[16px] w-full text-center mb-[10px]">{{ nowKnowledge.ask }}</h3>
      <p class="text-[14px] w-full text-center">{{ nowKnowledge.answer }}</p>
    </div>
  </dialog-main> -->
  <!-- <knowledge3d ref="knowledgeDesc" />
  <flip-clock ref="clock" /> -->
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import Knowledge3d from '../Knowledge3d/Knowledge3d.vue';
// import FlipClock from '../FlipClock/FlipClock.vue';

const isActive = ref(false);
const knowledgeDesc = ref();
const clock = ref();
const router = useRouter();

const props = defineProps({
	isMobile: {
		type: Boolean,
		default: false
	}
})

/**
 * 导航状态切换
 * @param {Boolean|undefined} status 
 */
const toggleStatus = (status) => {
  if (status !== undefined) {
    isActive.value = status;
    return;
  }
  isActive.value = isActive.value ? false : true;
}

const emit = defineEmits(['navclick']);

const navClick = (type) => {
  if (type === 'Knowledge') {
    // knowledgeDesc.value.show();
    router.push('/knowledge');
    return;
  }
  if (type === 'clock') {
    // clock.value.show();
    router.push('/flipclock');
    return;
  }
  emit('navclick', type)
}

</script>

<style scoped>
.setting-btn{
  transition: transform .4s ease-in-out, color .3s;
  font-size: 32px;
}
.other-btn{
  font-size: 24px;
  left: 0;
  transform-origin: 84px center;
  transform: translateX(64px);
  transition: transform .4s ease-in-out;
}
.other-btn:hover{
  color: #fff;
}
.sector-wrap{
  transition: transform .4s ease-in-out;
}
.sector-wrap.active{
  transform: translateY(20px);
}
.sector-wrap.active .setting-btn{
  transform: rotate(180deg);
}
.active .other-btn:nth-child(2) {
  transform: translateX(0) rotate(-20deg);
  /* transition-delay: .1s; */
}
.other-btn:nth-child(2) b {
  font-size: 18px;
  transform: rotate(20deg);
  /* transition-delay: .1s; */
}
.active .other-btn:nth-child(3) {
  transform: translateX(0) rotate(-65deg);
  transition-delay: .1s;
}
.other-btn:nth-child(3) b {
  transform: rotate(65deg);
}
.active .other-btn:nth-child(4) {
  transform: translateX(0) rotate(-115deg);
  transition-delay: .2s;
}
.other-btn:nth-child(4) b {
  transform: rotate(115deg);
}
.active .other-btn:nth-child(5) {
  transform: translateX(0) rotate(-160deg);
  transition-delay: .3s;
}
.other-btn:nth-child(5) b {
  transform: rotate(160deg);
}
</style>