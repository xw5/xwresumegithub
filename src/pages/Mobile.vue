<template>
  <particles />
  <div class="w-full min-h-screen flex flex-col items-center relative z-10">
    <!-- 个人信息 -->
    <div class="w-[7.2rem] max-w-[540px] max-h-[540px] h-[7.2rem] my-[.2rem]">
      <personal-data-mobile />
    </div>
    <!-- 个人技能 -->
    <div class="w-[7.2rem] max-w-[540px] max-h-[540px] h-[7.2rem] mb-[.2rem]">
      <Skill :isMobile="true" />
    </div>
    <!-- 工作经验 -->
    <div class="w-[7.2rem] max-w-[540px] max-h-[540px] h-[7.2rem] mb-[.2rem]">
      <work-experience :isMobile="true" />
    </div>
    <!-- 在线项目 -->
    <div class="w-[7.2rem] max-w-[540px] max-h-[540px] h-[7.2rem] mb-[.2rem]">
      <roll-broadcasting />
    </div>
    <!-- 关键字 -->
    <div class="w-[7.2rem] max-w-[540px] max-h-[540px] h-[7.2rem] mb-[.2rem]">
      <keywords />
    </div>
    <!-- 家庭成员 -->
    <div class="w-[7.2rem] max-w-[540px] max-h-[540px] h-[7.2rem] mb-[.2rem]">
      <relationship />
    </div>
  </div>
  <sector-nav @navclick="navclick" :isMobile="true" />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Particles from '../components/Particles/Particles.vue';
import PersonalDataMobile from '../components/PersonalData/PersonalDataMobile.vue';
import Skill from '../components/Skill/Skill.vue';
import WorkExperience from '../components/WorkExperience/WorkExperience.vue';
import Keywords from '../components/Keywords/Keywords.vue';
import Relationship from '../components/Relationship/Relationship.vue';
import RollBroadcasting from '../components/RollBroadcasting/RollBroadcasting.vue';
import SectorNav from '../components/SectorNav/SectorNav.vue';

const router = useRouter();
// 导航效果
const navclick = (type) => {
  switch(type) {
    case 'earth':
      router.push({
        name: 'earth'
      })
      break;
    case 'pc':
      router.push({
        name: 'home',
        query: { type: 'pc' }
      })
      break;
    default:
      break;
  }
}

</script>

<style scoped>

</style>