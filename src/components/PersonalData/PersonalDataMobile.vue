<template>
  <fly-box class="mt-[.05rem]">
    <div class="w-full h-full info-card-wrap relative overflow-hidden" :class="isFlip ? 'active' : ''">
      <div class="w-full h-full info-card">
        <!-- 正面 -->
        <div class="w-full h-full flex flex-col justify-center items-center cursor-pointer front">
          <div class="w-[80px] h-[80px] mr-[10px] rounded-[50%] overflow-hidden"><img class="w-full h-full align-top" src="../../assets/avatarnew.png" /></div>
          <div class="flex flex-col text-white text-[16px] text-center mt-[.2rem]">
            <p>昵称：小黑</p>
            <p>邮箱：xiewu5550@163.com</p>
            <p>微信：xwwxwin</p>
          </div>
        </div>
        <div class="w-full h-full grid grid-rows-[repeat(6,minmax(1fr, 56px))] gap-[5px] text-white text-[14px] grid-cols-[repeat(2,1fr)] place-content-center p-[10px] box-border text-center back">
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="籍贯：湖南娄底"><p class="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">籍贯：湖南娄底</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="现居地：广东珠海"><p class="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">现居地：广东珠海</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="学历：大专"><p class="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">学历：大专</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="毕业院校：湖南工学院"><p class="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">毕业院校：湖南工学院</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="工作经验：15年"><p class="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">工作经验：15年</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="前端经验：11年"><p class="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">前端经验：11年</p></div>
          <!-- <div class="w-full h-full">6</div> -->
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)] relative group cursor-pointer" title="微信：wxwxwin">
            <p class="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">微信：wxwxwin</p>
            <div class="absolute bottom-[80%] left-[50%] hidden show-scale ml-[-50px] group-hover:block rounder-[5px] w-[98px] h-[98px] border-[3px] border-[rgba(255,255,255,.6)] border-solid rounded-[3px]">
              <img :src="imgcode" alt="微信二维码" class="w-full h-full align-top">
            </div>
          </div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="邮箱：xiewu5550@163.com"><p class="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">邮箱：xiewu5550@163.com</p></div>
          <!-- <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]">
            <span>了解更多：</span>
            <resume-btn text="" />
          </div> -->
          <!-- <div class="max-w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)] col-span-2" title="电话：15019428287/18025088351"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">电话：<a href="tel:15019428287" class="text-white">15019428287</a>/<a class="text-white" href="tel:18025088351">18025088351</a></p></div> -->
          <div class="max-w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)] col-span-2"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">个人博客：<a class="text-white" href="https://www.cnblogs.com/xwwin" target="_blank" title="我的博客">https://www.cnblogs.com/xwwin</a></p></div>
          <!-- <div class="w-full h-full">9</div> -->
        </div>
      </div>
      <span @click="flip" class="iconfont cursor-pointer w-[.8rem] h-[.8rem] rounded-[50%] flex items-center justify-center absolute bottom-0 left-[50%] ml-[-.4rem] bg-[rgba(255,255,255,.5)] toggle-btn">&#xe621;</span>
    </div>
  </fly-box>
</template>

<script setup>
import { ref } from 'vue';
// import ResumeBtn from '../ResumeBtn/ResumeBtn.vue';
import wxCode from '../../assets/wxcode.jpg';
const imgcode = ref(wxCode);
const isFlip = ref(false);

const flip = () => {
  isFlip.value = isFlip.value ? false : true;
}
</script>

<style scoped>
  .info-card-wrap{
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  .info-card{
    transform-style: preserve-3d;
    position: relative;
    transition: transform .4s cubic-bezier(0.42, 0, 0.98, 1.39);
  }
  .info-card-wrap.active .info-card{
    transform: rotateY(180deg);
  }
  .front,.back{
    backface-visibility: hidden;
    position: absolute;
    inset: 0
  }
  .back{
    transform: rotateY(180deg);
  }
  @keyframes scaleshow {
    0%{
      opacity: 0;
      transform: scale(.5);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
  }
  .show-scale{
    transform-origin: bottom center;
    animation: scaleshow .4s ease-in-out 0s 1 forwards;
  }
  .toggle-btn{
    color: #666;
    transform:translateY(.24rem);
    transition: transform .4s;
    font-size: 24px;
  }
  .info-card-wrap.active .toggle-btn{
    color: #fff;
    transform:translateY(0);
  }
</style>