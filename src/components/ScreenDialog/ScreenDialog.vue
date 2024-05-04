<template>
  <div class="w-full h-full fixed flex items-center justify-center inset-0 bg-[rgba(0,0,0,.78)] z-[100] screen-dialog" style="{opacity: isOpacity ? 1 : 0}" v-if="isShow">
    <div class="max-w-[640px] w-[60%] max-h-[80%] max-[540px]:w-[89%] overflow-x-hidden overflow-y-auto dialog-main">
      <slot></slot>
    </div>
    <span @click="hide" class="iconfont absolute top-[5px] right-[5px] cursor-pointer text-white close">&#xe61a;</span>
  </div>
</template>

<script setup>
import { ref,nextTick } from 'vue';
const isShow = ref(false);
const isOpacity = ref(false);

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
    setTimeout(() => {
      isOpacity.value = true;
    }, 50);
  })
}
// 隐藏
const hide = () => {
  isOpacity.value = false;
  isShow.value = false;
  document.documentElement.style.overflow = 'auto';
}

defineExpose({
  show,
  hide
});
</script>

<style scoped>
@keyframes showDialog {
  0%{
    opacity: 0;
    transform: scale(2);
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }
}
.dialog-main{
  opacity: 0;
  transform: scale(2);
  animation: showDialog .4s ease-in-out .3s 1 forwards;
}
.dialog-main::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.dialog-main {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
.screen-dialog{
  backdrop-filter: blur(8px);
  transition: opacity .4s;
}
.close{
  font-size: 32px;
  transition: transform .5s;
}
.close:hover{
  transform: rotateZ(180deg);
}
</style>