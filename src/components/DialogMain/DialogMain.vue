<template>
  <div class="fixed inset-0 z-[100] bg-[rgba(0,0,0,.6)] flex items-center justify-center dialog-wrap" :style="{opacity: isOpacity ? 1 : 0}" v-if="isShow">
    <div class="max-w-[640px] w-[60%] max-h-[70%] max-[540px]:w-[89%] dialog-main">
      <div class="w-full bg-[rgba(255,255,255,.8)] box-border rounded-[10px] px-[5px] py-[10px] will-change-transform dialig-slot" @click.stop="" ref="card3D">
        <slot></slot>
        <span @click="hide" class="iconfont absolute top-[5px] right-[5px] cursor-pointer close">&#xe61a;</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import VanillaTilt from 'vanilla-tilt';

const isShow = ref(false);
const isOpacity = ref(false);
const card3D = ref();

const props = defineProps({
	isMobile: {
		type: Boolean,
		default: false
	}
})
// 展示
const show = () => {
  isShow.value = true;
  document.documentElement.style.overflow = 'hidden';
  nextTick(() => {
    isOpacity.value = true;
    if (props.isMobile) {
      return;
    }
    VanillaTilt.init(card3D.value, {
      max: 10,
      glare: false
    });
  })
}
// 隐藏
const hide = () => {
  isOpacity.value = false;
  isShow.value = false;
  document.documentElement.style.overflow = 'auto';
  if (card3D.value.vanillaTilt) {
    card3D.value.vanillaTilt.destroy();
  }
}

defineExpose({
  show,
  hide
});

</script>

<style scoped>
.dialog-wrap{
  perspective: 1000px;
  opacity:0;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  transition: opacity .4s;
}
@keyframes dialogshow {
  0%{
    opacity: 0;
    transform:scale(0) rotateY(720deg);
  }
  100%{
    opacity: 1;
    transform: scale(1) rotateY(0);
  }
}
.dialog-main{
  transform-style: preserve-3d;
  opacity: 0;
  animation: dialogshow .4s cubic-bezier(0,-0.35, 1, 1.48) .3s 1 forwards;
}
.dialig-slot{
  backface-visibility: hidden;
  backdrop-filter: blur(10px);
}
.close{
  font-size: 24px;
  transition: transform .5s;
}
.close:hover{
  transform: rotateZ(180deg);
}
</style>