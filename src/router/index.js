import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../pages/Home.vue";
// import Earth from "../pages/Earth.vue";
// import Mobile from "../pages/Mobile.vue";
import Loading from "../pages/Loading.vue";
import { pageStatus } from '../utils/common.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Loading",
      component: Loading,
    },
    {
      path: "/home",
      name: "home",
      component: () => import('../pages/Home.vue'),
    },
    {
      path: "/mobile",
      name: "mobile",
      component: () => import('../pages/Mobile.vue'),
    },
    {
      path: "/earth",
      name: "earth",
      component: () => import('../pages/Earth3d.vue'),
    },{
      path: "/flipclock",
      name: "flipclock",
      component: () => import('../pages/FlipClock.vue'),
    },{
      path: "/knowledge",
      name: "knowledge",
      component: () => import('../pages/Knowledge3d.vue'),
    },
  ],
});

// 路由拦截，做当前网页是PC态还是移动态做判断，做跳转
router.beforeEach(async (to, from) => {
  console.log('---- router.beforeEach ----',to, from)
  const pageType = pageStatus();
  // 强制跳的就不要判断当前浏览器状态了
  if (to.query.type) {
    return true;
  }
  if (to.name === 'home' && pageType === 'mobile') {
    return {name: 'mobile'}
  }
  if (to.name === 'mobile' && pageType === 'pc') {
    return {name: 'home'}
  }
})

export default router;