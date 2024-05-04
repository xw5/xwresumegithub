<template>
  <fly-box>
    <div class="w-full h-full info-card-wrap">
      <div class="w-full h-full info-card">
        <!-- 正面 -->
        <div class="w-full h-full flex justify-center items-center cursor-pointer front">
          <div class="w-[80px] h-[80px] mr-[10px] rounded-[50%] overflow-hidden"><img class="w-full h-full align-top" :src="imgavatar" /></div>
          <div class="flex flex-col text-white text-[16px]">
            <div>昵称：小黑</div>
            <div>邮箱：xiewu5550@163.com</div>
            <div>微信：xwwxwin</div>
          </div>
        </div>
        <div class="w-full h-full grid grid-rows-[repeat(4,minmax(1fr, 56px))] gap-[5px] text-white text-[14px] grid-cols-[repeat(3,1fr)] text-center place-items-center place-content-center p-[10px] box-border back">
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="籍贯：湖南娄底"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">籍贯：湖南娄底</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="现居地：广东珠海"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">现居地：广东珠海</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="学历：大专"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">学历：大专</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="毕业院校：湖南工学院"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">毕业院校：湖南工学院</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="工作经验：15年"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">工作经验：15年</p></div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]" title="前端经验：11年"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">前端经验：11年</p></div>
          <!-- <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)] col-span-2" title="电话：15019428287"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">电话：15019428287</p></div> -->
          <!-- <div class="w-full h-full">6</div> -->
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)] relative group cursor-pointer" title="微信：wxwxwin">
            <p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">微信：wxwxwin</p>
            <div class="absolute bottom-[80%] left-[50%] hidden show-scale ml-[-50px] group-hover:block rounder-[5px] w-[98px] h-[98px] border-[3px] border-[rgba(255,255,255,.6)] border-solid rounded-[3px]">
              <img :src="imgcode" alt="微信二维码" class="w-full h-full align-top">
            </div>
          </div>
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)] col-span-2" title="邮箱：xiewu5550@163.com"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">邮箱：xiewu5550@163.com</p></div>
          <!-- <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)]">
            <span>了解更多：</span>
            <resume-btn text="" />
          </div> -->
          <div class="w-full h-full flex items-center justify-center border-[1px] border-dashed border-[rgba(255,255,255,.4)] col-span-3"><p class="w-full text-ellipsis overflow-hidden whitespace-nowrap">个人博客：<a class="text-white" href="https://www.cnblogs.com/xwwin" target="_blank" title="我的博客">https://www.cnblogs.com/xwwin</a></p></div>
          <!-- <div class="w-full h-full">9</div> -->
        </div>
      </div>
    </div>
  </fly-box>
</template>

<script setup>
import { ref } from 'vue';
import ResumeBtn from '../ResumeBtn/ResumeBtn.vue';
import wxCode from '../../assets/wxcode.jpg';
import avatarnew from '../../assets/avatarnew.png';
const imgcode = ref(wxCode);
const imgavatar = ref(avatarnew);

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
  .info-card-wrap:hover .info-card{
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
</style>