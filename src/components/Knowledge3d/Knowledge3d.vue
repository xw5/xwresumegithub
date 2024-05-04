<template>
  <div class="fixed inset-0 bg-[rgba(0,0,0,.68)] knowledge-wrap z-50" v-show="isShow">
    <ul class="w-[100%] h-full relative knowledge-list" :style="{transformOrigin: `center center ${whalf}px`, transform:`rotateY(${rotateYdeg}deg)`, transition:`transform ${transitionTime}s`}" v-if="knowledgeList">
      <li class="w-full h-full flex flex-col justify-center items-center absolute top-0 left-[100%] opacity-0 knoledge-item" v-for="(item, index) in knowledgeList" :key="index" :class="[{knowledgeactive: nowKnowledgeIndexOld === index}, nowClass(index)]">
        <div class="w-[68%] max-w-[750px] max-[750px]:w-[86%] h-[60%] rounded-[10px] bg-[rgba(255,255,255,0.8)] text-black flex flex-col justify-center">
          <h3 class="text-[24px] w-full text-center mb-[10px]">{{ item.ask }}</h3>
          <p class="text-[16px] w-full text-center break-words px-[10px]">{{ item.answer }}</p>
        </div>
      </li>
    </ul>
    <!-- <span v-show="hasPrev" @click="prevAction" class="text-[rgba(255,255,255,0.5)] iconfont absolute top-[50%] translate-y-[-50%] left-[10px] z-[50] prev-btn hover:text-white">&#xe83d;</span>
    <span v-show="hasNext" @click="nextAction" class="text-[rgba(255,255,255,0.5)] iconfont absolute top-[50%] translate-y-[-50%] right-[10px] z-[50] prev-btn hover:text-white">&#xe840;</span> -->
    <div class="flex w-full felx-row items-center justify-center" :class="{'absolute bottom-[10px] left-0': pageType === 'mobile'}">
      <span @click="prevAction" :title="hasPrev ? '上一题' : '没有上一题了'" class="text-[rgba(255,255,255,0.5)] cursor-pointer iconfont z-[50] prev-btn hover:text-white" :class="{'absolute top-[50%] translate-y-[-50%] left-[10px]': pageType === 'pc', 'mr-[15px]': pageType=== 'mobile', 'hover:text-[rgba(255,255,255,0.5)] opacity-65 cursor-not-allowed': !hasPrev}">&#xe83d;</span>
      <span @click="nextAction" :title="hasNext ? '下一题' : '没有下一题了'" class="text-[rgba(255,255,255,0.5)] cursor-pointer iconfont z-[50] prev-btn hover:text-white" :class="{'absolute top-[50%] translate-y-[-50%] right-[10px]': pageType === 'pc', 'hover:text-[rgba(255,255,255,0.5)] opacity-65 cursor-not-allowed': !hasNext}">&#xe840;</span>
    </div>
    <span @click="hide" class="iconfont absolute top-[5px] right-[5px] cursor-pointer text-white close">&#xe61a;</span>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '../../store/index.js';
const store = useGlobalStore();
const {nowKnowledgeIndex, knowledgeList, pageType } = storeToRefs(store);
const { changeNowKnowledgeIndex, updatePageType } = store;
const isShow = ref(0)
const tstime = .5;
const whalf = ref(0);
const nowKnowledgeIndexOld = ref(nowKnowledgeIndex.value);
const rotateYdeg = ref(0);
const transitionTime = ref(tstime);
let isRuning = false;

// 是否还有下一页
const hasNext = computed(() => {
  return nowKnowledgeIndex.value < knowledgeList.value.length - 1;
});
// 是否还有上一页
const hasPrev = computed(() => {
  return nowKnowledgeIndex.value > 0;
});

// 根据是上下一张来判断添加的class
const nowClass = (index) => {
  if (nowKnowledgeIndex.value === index) {
    if (nowKnowledgeIndexOld.value > nowKnowledgeIndex.value) {
      return 'prev';
    } else if(nowKnowledgeIndexOld.value < nowKnowledgeIndex.value) {
      return 'next';
    }
  }
  return '';
}

// 上一个
const prevAction = () => {
  if (!hasPrev.value || isRuning) {
    return;
  }
  nowKnowledgeIndexOld.value = nowKnowledgeIndex.value;
  changeNowKnowledgeIndex(nowKnowledgeIndexOld.value - 1)
  toggle(nowKnowledgeIndexOld.value, nowKnowledgeIndex.value);
}

// 下一个
const nextAction = () => {
  if (!hasNext.value || isRuning) {
    return;
  }
  nowKnowledgeIndexOld.value = nowKnowledgeIndex.value;
  changeNowKnowledgeIndex(nowKnowledgeIndexOld.value + 1)
  toggle(nowKnowledgeIndexOld.value, nowKnowledgeIndex.value);;
}

const toggle = (oldIndex, newIndex) => {
  // console.log('---- toggle ----:', oldIndex, newIndex);
  if (oldIndex === newIndex || isRuning) {
    return 0;
  }
  isRuning = true;
  transitionTime.value = tstime;
  if (oldIndex > newIndex) {
    rotateYdeg.value = -90;
  } else {
    rotateYdeg.value = 90;
  }
  setTimeout(() => {
    transitionTime.value = 0;
    rotateYdeg.value = 0;
    nowKnowledgeIndexOld.value = nowKnowledgeIndex.value;
    isRuning = false;
  }, tstime * 1000 +10);
}

const show = () => {
  isShow.value = true;
}

const hide = () => {
  isShow.value = false;
}

onMounted(() => {
  whalf.value = window.innerWidth / 2;
  console.log('---- nowKnowledgeIndexOld,nowKnowledgeIndex ----:', nowKnowledgeIndexOld.value, nowKnowledgeIndex.value);
  console.log('---- whalf.value ----', whalf.value)
})

defineExpose({
  show,
  hide
})

</script>

<style scoped>
@keyframes opacityAni {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.knowledge-wrap {
  perspective: 1000px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  animation: opacityAni .4s ease-in-out 0s 1 forwards;
}
.knowledge-list{
  transform-style: preserve-3d;
  /* transition: transform .5s; */
}
/* .knowledge-list:hover{
  transform: rotateY(90deg);
} */
/* .knoledge-item{
  transform-style: preserve-3d;
} */
.knowledgeactive{
  left: 0;
  transform: rotateY(0deg);
  opacity: 1;
}
.prev{
  transform-origin: right center;
  transform: rotateY(90deg);
  left: -100%;
  opacity: 1;
}
.next{
  left:100%;
  transform-origin: left center;
  transform: rotateY(-90deg);
  opacity: 1;
}
.prev-btn,.next-btn{
  font-size: 36px;
  line-height: 56px;
}
.close{
  font-size: 32px;
  transition: transform .5s;
}
.close:hover{
  transform: rotateZ(180deg);
}
</style>