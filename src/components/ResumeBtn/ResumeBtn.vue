<template>
  <a href="https://gitee.com/github-9819409/xwdataboard/raw/master/docs/%E4%B8%AA%E4%BA%BA%E7%AE%80%E5%8E%86(%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91-%E8%B0%A2%E6%AD%A6202404014).pdf" title="获取简历" class="flex flex-col items-center text-[white] text-[14px] hover:text-[#1afa29]">
    <span class="iconfont resume">&#xe612;</span>
    {{ text || '' }}
  </a>
</template>

<script setup>
  defineProps({
    text: {
      type: String,
      default: '获取简历'
    }
  })
</script>

<style scoped>
.resume{
  font-size: 24px;
}
</style>