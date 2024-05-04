import { ref, computed } from 'vue';
import { defineStore } from 'pinia'
import { knowledge } from '../utils/commonSense.js';
import { pageStatus } from '../utils/common.js';

export const useGlobalStore = defineStore('global', () => {
  const knowledgeList = ref(knowledge);
  const nowKnowledgeIndex = ref(Math.floor(Math.random() * knowledge.length));
  const nowKnowledge = computed(() => knowledge[nowKnowledgeIndex.value]);
  const pageType = ref(pageStatus());

  // 是否是强制切换页面状态
  const isForceStatus = ref(false);

  // 强制改变状态
  const changeForceStatus = (status) => {
    isForceStatus.value = status;
  }

  // 修改知识库当前高亮状态
  const changeNowKnowledgeIndex = (index) => {
    nowKnowledgeIndex.value = index;
  }

  const updatePageType = () => {
    pageType.value = pageStatus();
  }

  return { 
    nowKnowledgeIndex, 
    nowKnowledge, 
    isForceStatus,
    knowledgeList,
    pageType,
    updatePageType,
    changeForceStatus,
    changeNowKnowledgeIndex
  }
})