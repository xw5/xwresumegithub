<template>
  <fly-box>
    <div class="w-full h-full relative flex flex-col overflow-hidden">
      <h3 class="text-[14px] w-full text-center text-[rgba(255,255,255,.68)] font-bold px-[10px] box-border">在线可访问项目</h3>
      <div class="flex-1 relative overflow-hidden text-[12px] mb-[10px] mx-[10px] box-border" id="rollingContainer">
        <div class="container w-full flex flex-col items-center text-white">

          <a v-for="(project, index) in projectList" :key="index" title="点击查看" :href="project.url" target="_blank" class="w-full h-[46px] flex-none text-[14px] leading-[46px] cursor-pointer project-item-wrap box-border py-[5px]">
            <div class="w-full h-full flex relative project-item">
              <span class="w-full px-[5px] box-border h-full block text-center bg-[rgba(128,128,128,.2)] leading-[36px] front whitespace-nowrap text-ellipsis overflow-hidden">项目：{{ project.title }}</span>
              <span class="w-full px-[5px] box-border h-full block text-center bg-[rgba(128,128,128,.5)] leading-[36px] back whitespace-nowrap text-ellipsis overflow-hidden">链接：<span class="py-[5px] svg-wave">{{ project.url }}</span></span>
            </div>
          </a>

        </div>
      </div>
      <span v-if="isMobile" @click="more" class="iconfont w-[.8rem] text-[#666] hover:text-white h-[.8rem] rounded-[50%] flex items-center justify-center absolute bottom-0 left-[50%] ml-[-.4rem] bg-[rgba(255,255,255,.5)] cursor-pointer toggle-btn" :class="toggleActive ? 'active' : ''">&#xe657;</span>
      <toggle-nav v-else :list="navList" @toggle="togleChart" ref="navBar" />

      <!-- <span v-else @click="more" class="iconfont w-[30px] text-[#666] hover:text-white h-[30px] rounded-tl-[10px] rounded-bl-[10px] flex items-center justify-center absolute right-0 top-[50%] translate-y-[-50%] ml-[-.4rem] bg-[rgba(255,255,255,.5)] cursor-pointer toggle-btn0">&#xe657;</span> -->
    </div>
  </fly-box>
  <screen-dialog ref="showMore">
    <div class="w-full h-full ">
      <a v-for="(project, index) in projectList" :key="index" :style="{'--i': index/10 + .4 + 's'}" title="点击查看" :href="project.url" target="_blank" class="w-full flex flex-col h-[46px] flex-none text-[14px] leading-[46px] cursor-pointer project-item-wrap project-item-wrap0 box-border py-[5px]">
        <div class="w-full h-full flex relative project-item">
          <span class="w-full px-[5px] box-border h-full block text-center text-white bg-[rgba(128,128,128,.6)] leading-[36px] front whitespace-nowrap text-ellipsis overflow-hidden">项目：{{ project.title }}</span>
          <span class="w-full px-[5px] box-border h-full block text-center text-white bg-[rgba(128,128,128,1)] leading-[36px] back whitespace-nowrap text-ellipsis overflow-hidden">链接：<span class="py-[5px] svg-wave">{{ project.url }}</span></span>
        </div>
      </a>
    </div>
  </screen-dialog>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import projectList from './projectList.js';
import Rolling from '../../utils/Rolling.js';
import ScreenDialog from '../ScreenDialog/ScreenDialog.vue';
import ToggleNav from '../ToggleNav/ToggleNav.vue';

const list = ref(projectList);
const showMore = ref();
const toggleActive = ref(false);
const navList = ref([
  {
		icon: '&#xe657;',
		title: '展开看看',
		type: 'open'
	}
])
let rollingItem = null;

const props = defineProps({
	isMobile: {
		type: Boolean,
		default: false
	}
})

// 查看更多信息
const more = () => {
  toggleActive.value = true;
  setTimeout(() => {
    toggleActive.value = false;
  }, 300);
  showMore.value.show();
}

const togleChart = (item, index) => {
  more();
}
onMounted(() => {
  console.log('---- onMounted ----:');
  nextTick(()=> {
    rollingItem = new Rolling('#rollingContainer');
  });
})

</script>

<style scoped>
.project-item-wrap{
  perspective: 500px;
  /* transform-style: preserve-3d; */
}
.project-item-wrap:hover .project-item{
  transform-origin: center center -18px;
  transform: rotateX(90deg);
}
.project-item{
  /* perspective: 600px; */
  transform-style: preserve-3d;
  /* overflow: hidden; */
  transition: transform .4s;
}
.front,.back{
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 6px;
  transform-style: preserve-3d;
  overflow: hidden;
  backface-visibility: hidden;
  /* background-color: rgba(128,128,128,.2); */
}
.back{
  top: 36px;
  transform-origin: top center;
  transform: rotateX(-90deg);
  /* background-color: rgba(128,128,128,.5) */
}
@keyframes waveMove {
    from { background-position: 0 100%; }
    to   { background-position: -20px 100%; }
}
.svg-wave {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='rgba(255,255,255,.4)' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E") repeat-x 0 100%; 
    background-size: 20px auto;
    animation: waveMove 1s infinite linear;
}
@keyframes projectEnter {
  0%{
    opacity: 0;
    transform: translateY(-100%);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
.project-item-wrap0{
  opacity: 0;
  transform: translateY(-100%);
  animation: projectEnter .3s 1 var(--i) forwards;
}

.toggle-btn{
  transform:translateY(.24rem);
  transition: transform .4s;
  font-size: 24px;
}

.toggle-btn.active{
  color: #fff;
  transform:translateY(0);
}
</style>