<template>
  <div class="w-full h-screen fixed inset-0 z-50 bg-[rgba(0,0,0,.8)] flex flex-col justify-center items-center clock-wrap">
    <div class="clock-container relative" :style="{transform: `rotate(${rotateDeg}deg) scale(${scaleSize})`}">
      <div class="text-[rgba(255,255,255,.68)] text-[40px] absolute top-[-80px] left-0 w-full leading-[80px] text-center">{{ dateStr }}</div>
      <div class="text-[rgba(255,255,255,.46)] text-[20px] absolute bottom-[-60px] left-0 w-full text-center leading-[30px] h-[30px] tips-wrap">
        <div class="w-full h-full relative tips-container" :style="{transform:`rotateX(${tipsIndex * 90}deg)`}">
          <p class="w-full h-full text-center absolute top-0 left-0" :class="'tips'+index" :key="index" v-for="(tips, index) in tipss">{{ tips }}</p>
        </div>
      </div>
      <div class="text-[rgba(255,255,255,.26)] text-[40px] absolute bottom-0 right-[-78px]">{{ ampm }}</div>
      <div class="clock-item mr-[10px]" :class="nowVal[0] !== nextVal[0] ? 'active' : ''">
        <div class="clock-num up up-front">{{ nowVal[0] }}</div>
        <div class="clock-num down down-front">{{ nowVal[0] }}</div>
        <div class="clock-num up up-back">{{ nextVal[0] }}</div>
        <div class="clock-num down down-back">{{ nextVal[0] }}</div>
      </div>
      <div class="clock-item" :class="nowVal[1] !== nextVal[1] ? 'active' : ''">
        <div class="clock-num up up-front">{{ nowVal[1] }}</div>
        <div class="clock-num down down-front">{{ nowVal[1] }}</div>
        <div class="clock-num up up-back">{{ nextVal[1] }}</div>
        <div class="clock-num down down-back">{{ nextVal[1] }}</div>
      </div>
      <div class="separate" :class="isPointAni ? 'active': ''">
        <span class="separate-item"></span>
        <span class="separate-item"></span>
      </div>
      <div class="clock-item mr-[10px]" :class="nowVal[2] !== nextVal[2] ? 'active' : ''">
        <div class="clock-num up up-front">{{ nowVal[2] }}</div>
        <div class="clock-num down down-front">{{ nowVal[2] }}</div>
        <div class="clock-num up up-back">{{ nextVal[2] }}</div>
        <div class="clock-num down down-back">{{ nextVal[2] }}</div>
      </div>
      <div class="clock-item" :class="nowVal[3] !== nextVal[3] ? 'active' : ''">
        <div class="clock-num up up-front">{{ nowVal[3] }}</div>
        <div class="clock-num down down-front">{{ nowVal[3] }}</div>
        <div class="clock-num up up-back">{{ nextVal[3] }}</div>
        <div class="clock-num down down-back">{{ nextVal[3] }}</div>
      </div>
      <div class="separate" :class="isPointAni ? 'active': ''">
        <span class="separate-item"></span>
        <span class="separate-item"></span>
      </div>
      <div class="clock-item mr-[10px]" :class="nowVal[4] !== nextVal[4] ? 'active' : ''">
        <div class="clock-num up up-front">{{ nowVal[4] }}</div>
        <div class="clock-num down down-front">{{ nowVal[4] }}</div>
        <div class="clock-num up up-back">{{ nextVal[4] }}</div>
        <div class="clock-num down down-back">{{ nextVal[4] }}</div>
      </div>
      <div class="clock-item" :class="nowVal[5] !== nextVal[5] ? 'active' : ''">
        <div class="clock-num up up-front">{{ nowVal[5] }}</div>
        <div class="clock-num down down-front">{{ nowVal[5] }}</div>
        <div class="clock-num up up-back">{{ nextVal[5] }}</div>
        <div class="clock-num down down-back">{{ nextVal[5] }}</div>
      </div>

    </div>
    <span @click="back" class="iconfont absolute right-[5px] cursor-pointer text-white close" :class="rotateDeg === 90 ? 'bottom-[5px]' : 'top-[5px]'">&#xe61a;</span>

  </div>
</template>

<script setup>
import { ref, onUnmounted, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { timestampToTime } from '../utils/common.js';
const dateStr = ref('');
const ampm = ref('');
const tipss = ref(['一寸光阴一寸金，寸金难买寸光阴','时光荏苒，岁月如梭，珍惜当下，莫待明日','时间是生命的馈赠，珍惜它，就是对生命最好的尊重','时间就像流水，一旦逝去，便不复返']);
const tipsIndex = ref(0)
const nowVal = ref([0,0,0,0,0,0]);
const nextVal = ref([0,0,0,0,0,0]);
const isPointAni = ref(false);
const router = useRouter();

const countTime = () => {
  const timeStr = timestampToTime();
  const timeArr = timeStr.split(' ');
  ampm.value = timeArr[3];
  dateStr.value = timeArr[0] + ' ' + timeArr[2];
  nextVal.value = timeArr[1].replace(/:/g, '').split('');
  // console.log('---- countTime ----:', dateStr.value, nextVal.value);
  isPointAni.value = true;
  setTimeout(()=>{
    nowVal.value = timeArr[1].replace(/:/g, '').split('');
    isPointAni.value = false;
  }, 550);
}
let countTag = 0;
let dirction = 'up';
let timer = null;

const rotateDeg = ref(0);
const scaleSize = ref(1);
const resizeFn = () => {
  const {innerWidth, innerHeight} = window;
  let scaleTemp = 1;
  if (innerWidth < innerHeight) {
    rotateDeg.value = 90;
    scaleTemp = innerHeight / 880;
  } else {
    rotateDeg.value = 0;
    scaleTemp = innerWidth / 880;
  }
  scaleSize.value = scaleTemp > 1 ? 1 : scaleTemp;
};
onMounted(() => {
  resizeFn();
  timer = setInterval(()=>{
    countTime();
    countTag += 1;
    if (countTag === 3){
      countTag = 0;
      tipsIndex.value += dirction === 'up' ? 1 : -1;
      if (tipsIndex.value >= 3) {
        dirction = 'down';
      } else if (tipsIndex.value <= 0) {
        dirction = 'up';
      }
    }
  },1000);
  window.addEventListener('resize', resizeFn, false);
})

const back = () => {
  router.back();
}

onUnmounted(() => {
  clearInterval(timer);
  window.removeEventListener('resize', resizeFn, false);
})
</script>

<style scoped>
.clock-wrap{
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  transition: opacity 0.3s;
}
.clock-container{
  display: flex;
  flex-direction: row;
}
.clock-item{
  position: relative;
  width: 100px;
  height: 160px;
  perspective: 600px;
  /* transform-style: preserve-3d; */
}
.clock-item::after{
  content: ' ';
  width: 100%;
  height: 2px;
  background-color: rgba(0,0,0,.6);
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -1px;
  z-index: 4;
}
.clock-num{
  /* perspective: 400px; */
  position: absolute;
  width: 100%;
  height: 50%;
  overflow: hidden;
  text-align: center;
  /* border-radius: 5px; */
  text-align: center;
  /* display: flex;
  justify-content: center; */
  font-size: 120px;
  font-weight: bold;
  color: #fff;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  background: rgb(22, 69, 62);
}

.up{
  line-height: 160px;
  top:0;
  left:0;
  border-radius: 5px 5px 0 0;
}
.down{
  line-height: 0;
  top: 50%;
  left: 0;
  border-radius: 0 0 5px 5px;
}
.up-front,.down-front{
  z-index: 2;
}
.down-front{
  transform-origin: center top;
}
.up-back{
  z-index: 3;
  transform-origin: center bottom;
  transform: rotateX(180deg);
}
.clock-item.active .down-front{
  transition: transform .5s ease-in-out;
  transform: rotateX(180deg);
}
.clock-item.active .up-back{
  transition: transform .5s ease-in-out;
  transform: rotateX(0deg);
}
.separate{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
}
@keyframes clockPoint {
  0% {
    background-color: rgb(22, 69, 62);
  }
  100%{
    background-color: rgba(255, 255, 255, .68);
  }
}
.separate-item{
  width: 10px;
  height: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  background-color: rgb(22, 69, 62);
}
.separate.active .separate-item{
  animation: clockPoint .4s linear 0s 1;
}
/* @keyframes tipsani {
  0%{
    transform: rotateX(0deg);
  }
  100%{
    transform: rotateX(360deg);
  }
} */
.tips-wrap{
  perspective: 400px;
  /* animation: tipsani 4s steps(4) 0s infinite; */
}
.tips-container{
  transform-style: preserve-3d;
  transform-origin: 50% 50% -15px;
  transition: transform .4s;
}
.tips0,.tips1,.tips2,.tips3{
  backface-visibility: hidden;
}
.tips1{
  top: 100%;
  transform-origin: center top;
  transform: rotateX(-90deg);
}
.tips2{
  transform: translateZ(-30px) rotateX(180deg);
}
.tips3{
  top: -100%;
  transform-origin: center bottom;
  transform: rotateX(90deg);
}
.close{
  font-size: 32px;
  transition: transform .5s;
}
.close:hover{
  transform: rotateZ(180deg);
}
</style>