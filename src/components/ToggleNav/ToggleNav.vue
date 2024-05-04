<template>
  <div class="w-[120px] overflow-hidden absolute top-[50%] translate-y-[-50%] right-0 z-50 pointer-events-none" :style="{height: (listlen * 45 - 5)  +'px'}">
    <ul class="w-[30px] flex flex-col absolute top-0 right-0 nav-list pointer-events-auto">
      <li 
        v-for="(item, index) in list"
       :key="index" 
       class="w-[120px] flex last-of-type:mb-0 bg-[rgba(102,102,102,.5)] mb-[5px] text-[#999] rounded-tl-[10px] rounded-bl-[10px] hover:translate-x-[-80px] transition-transform cursor-pointer" 
       :class="activeIndex === index ? 'active' : ''"
       @click="navClick(item, index)"
      >
        <span class="iconfont flex-none w-[30px] text-[24px] font-bold text-center leading-[40px] nav-icon" v-html="item.icon"></span>
        <span class="w-[90px] flex-none text-center leading-[40px] text-[16px]">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const activeIndex = ref(0)

const props = defineProps({
  list: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['toggle']);

const listlen = computed(() => {
  if (!props.list) {
    return 0;
  }
  return props.list.length;
});

const navClick = (item, index) => {
  activeIndex.value = index;
  emit('toggle', item, index);
}

const setIndex = (index) => {
  activeIndex.value = index;
}

defineExpose({
  setIndex
})

</script>

<style>
  .nav-list .active{
    color: rgb(255, 255, 255, .6)!important;
  }
  .nav-list li:hover .nav-icon{
    animation: dnani .3s ease-in-out 0s infinite alternate;
  }
  @keyframes dnani {
    0%{
      transform: translateY(-2px) skewX(0);
    }
    50%{
      transform: translateY(2px) skewX(10deg);
    }
    70%{
      transform: translateY(-2px) skewX(0);
    }
    100%{
      transform: translateY(2px) skewX(-10deg);
    }
  }
</style>