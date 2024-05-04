<template>
  <div class="w-full overflow-hidden relative h-screen">
    <p class="w-full absolute left-0 top-[10px] flex items-center justify-center text-white text-[40px] max-[750px]:top-[.86rem] max-[750px]:text-[.42rem] text-center z-10">
      <span class="title">热爱和平，保护环境，共创和谐家园</span>
    </p>
    <div class="w-full h-full overflow-hidden earth-container" ref="monthEarth"></div>
    <span title="我有一个愿望" @click="hopeAction" class="iconfont absolute bottom-0 left-[50%] translate-x-[-50%] z-20 cursor-pointer text-[rgba(255,255,255,.5)] hover:text-[rgba(255,255,255,1)] holp-btn">&#xe6d7;</span>
    <p class="text-[16px] text-white absolute bottom-[20px] left-[50%] translate-x-[-50%] now-hope" :style="{'--wh':winH/2 +'px' }" :class="showNowHope ? 'nowhope-active' : ''" v-if="nowHope">{{ nowHope }}</p>
    <span @click="back" class="iconfont absolute top-[5px] right-[5px] z-20 cursor-pointer close">&#xe61a;</span>
    <canvas class="w-full h-full absolute top-0 left-0 z-[50] pointer-events-none" id="fireWork"></canvas>
    <dialog-main ref="hope" :isMobile="isMobile">
      <div class="w-full flex flex-col items-center">
        <h3 class="text-[20px] mb-[10px] font-bold">我有一个愿望</h3>
        <p  @click="hopeSelect(item)" class="text-[16px] hover:bg-[rgba(255,255,255,1)] cursor-pointer w-[60%] text-center mb-[10px] py-[5px] bg-[rgba(255,255,255,.5)] rounded-[5px]" :key="index" v-for="(item, index) in hopeList">{{ item }}</p>
      </div>
    </dialog-main>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import * as Echarts from 'echarts';
  import 'echarts-gl';
  import { Fireworks } from 'fireworks-js'
  import DialogMain from '../components/DialogMain/DialogMain.vue';
  import { pageStatus } from '../utils/common.js';
  // import worldTopoBathy200401 from '../assets/earth/world.topo.bathy.200401.jpg';
  // import worldTopoBathy200401MObile from '../assets/earth/world.topo.bathy.200401-mobile.jpg';
  // import starfield from '../assets/earth/starfield.jpg';
  // import pisahdr from '../assets/earth/pisa.hdr';
  import Earth from '../utils/Earth.js';

  const monthEarth = ref()
  const router = useRouter();
  const pageType = pageStatus();

  const back = () => {
    router.replace({
      name: 'home'
    })
  }

  const hope = ref();
  const hopeList = ref(['愿地球常绿，生态永存','绿水青山，守护家园','环保行动，共筑未来','珍爱自然，和谐共生','守护蓝天，呼吸清新','和平相伴，幸福常在','放下纷争，拥抱和平','放下武器，拥抱和平','和平之花，绽放人间','心中有爱，和平永驻']);
  const nowHope = ref();
  const showNowHope = ref(false);
  const winH = ref(0);
  const isMobile = ref(pageType === 'mobile');
  const hopeAction = () => {
    hope.value.show();
  }
  const hopeSelect = (item) => {
    nowHope.value = item;
    hope.value.hide();
    showNowHope.value = true;
    fireworks.start();
    setTimeout(() => {
      showNowHope.value = false;
      fireworks.waitStop(true);
    }, 2000);
  }
  let fireworks = null;
  onMounted(() => {
    console.log('---- Earth onMounted ----:');
    winH.value = window.innerHeight;
    setTimeout(() => {
      new Earth(monthEarth.value);
      window.addEventListener('resize', () => {
        winH.value = window.innerHeight;
        fireworks.updateSize({
          w: window.innerWidth,
          h: window.innerHeight
        });
      })
    }, 100);

    fireworks = new Fireworks(document.querySelector('#fireWork'), {
      particles: 100,
    });
  })
</script>

<style scoped>
@keyframes earthShow {
  0%{
    opacity: 0;
    transform: scale(5);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
/* .earth-container{
  opacity: 0;
  transform: scale(5);
  animation: earthShow .4s ease-in-out 0s 1 forwards;
} */
.close{
  font-size: 36px;
  color: rgba(255,255,255,.6);
  transition: transform .4s;
}
@media screen and (max-width: 750px) {
  .close{
    font-size: .56rem;
  }
}
.close:hover{
  color: rgba(255,255,255,1);
  transform:rotate(180deg);
}
.title{
  text-align: center;
  background: linear-gradient(45deg,rgba(255,255,255,.3), #0f0, #00f, rgba(255,255,255,.3)) 0 0 no-repeat;/*设置线性渐变*/
  background-size: 50% 100%;                        /*设置背景大小*/
  background-clip: text;                            /*背景被裁剪到文字*/
  -webkit-text-fill-color: rgba(255, 255, 255, .5);        /*设置文字的填充颜色*/
  text-shadow: 0 0 10px rgba(255,255,255,.5);
  animation: titllani 3s infinite alternate;                    /*设置动画*/
}
@keyframes titllani{   /*创建动画*/
  0%{
    background-position: -50% 0;
  }
  100%{
    background-position: 100% 0;
  }
}
.holp-btn{
  font-size: 46px;
}
.now-hope{
  opacity: 0;
  transform: translate(-50%, 0) scale(0);
}
@keyframes hopeAni {
  0%{
    opacity: 0;
    transform: translateX(-50%) scale(0);
    bottom: 20px;
  }
  10%{
    opacity: .5;
    transform: translateX(-50%) scale(.3);
    bottom: 20px;
  }
  70%{
    opacity: 1;
    transform: translateX(-50%) scale(1);
    bottom: var(--wh);
  }
  80%{
    opacity: 1;
    transform: translateX(-50%) scale(1.2);
    bottom: var(--wh);
  }
  100%{
    opacity: 0;
    transform: translateX(-50%) scale(0);
    bottom: var(--wh);
  }
}
.nowhope-active{
  animation: hopeAni 1.5s ease-in-out .1s 1 forwards;
}
</style>