<template>
  <div class="fixed inset-0 bg-[rgba(0,0,0,.6)] z-50 overflow-hidden">
    <div class="w-full h-full earth-container" ref="monthEarth" v-show="isShow"></div>
    <span @click="hide" class="iconfont absolute top-[5px] right-[5px] cursor-pointer close">&#xe61a;</span>
  </div>
</template>

<script setup>
  import { nextTick, ref } from 'vue';
  import * as Echarts from 'echarts';
  import 'echarts-gl';
  import worldTopoBathy200401 from '../../assets/earth/world.topo.bathy.200401.jpg';
  import starfield from '../../assets/earth/starfield.jpg';
  import pisahdr from '../../assets/earth/pisa.hdr';

  const monthEarth = ref()
  const isShow = ref(false);

  let myChart = null;
  const renderChart = () => {
    const option = {
      backgroundColor: '#000',
      globe: {
        baseTexture: worldTopoBathy200401,
        heightTexture: worldTopoBathy200401,
        displacementScale: 0.04,
        shading: 'realistic',
        environment: starfield,
        realisticMaterial: {
          roughness: 0.9
        },
        postEffect: {
          enable: true
        },
        light: {
          main: {
            intensity: 5,
            shadow: true
          },
          ambientCubemap: {
            texture: pisahdr,
            diffuseIntensity: 0.2
          }
        }
      }
    }
    myChart = Echarts.init(monthEarth.value);
    myChart.setOption(option, true);
  }

  const show = () => {
    isShow.value = true;
    nextTick(() => {
      setTimeout(() => {
        renderChart();
      }, 300);
    });
  }

  const hide = () => {
    isShow.value = false;
  }

  defineExpose({
    show,
    hide
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
.earth-container{
  opacity: 0;
  transform: scale(5);
  animation: earthShow .4s ease-in-out 0s 1 forwards;
}
.close{
  font-size: 36px;
  color: rgba(255,255,255,.6);
  transition: transform .4s;
}
.close:hover{
  color: rgba(255,255,255,1);
  transform:rotate(180deg);
}
</style>