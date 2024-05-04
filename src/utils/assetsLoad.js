import worldTopoBathy200401 from '../assets/earth/world.topo.bathy.200401-mobile.jpg';
// import worldTopoBathy200401MObile from '../assets/earth/world.topo.bathy.200401-mobile.jpg';
// import starfield from '../assets/earth/starfield.jpg';
import wxCode from '../assets/wxcode.jpg';
import avatarnew from '../assets/avatarnew.png';

const loadAssets = [
  worldTopoBathy200401,
  wxCode,
  avatarnew 
];

/**
 * 静态资源加载方法封装，用于实现加载loading
 * @param { Function } endCd 
 * @param { Function } progress 
 */
export const assertsLoad = (endCd, progress) => {
  let loadCount = 0;
  const totalCount = loadAssets.length;
  LoadingObj.nextCount = 0;
  // 加载动作
  const loadAction = (src) => {
    loadCount += 1;
    console.log('--loadAssets--:', loadCount);
    progress && progress(loadCount/totalCount);
    LoadingObj.loadedList.push(src);
    if (loadCount === loadAssets.length) {
      endCd && endCd()
    }
  }
  loadAssets.forEach((src) => {
    const img = new Image();
    img.src = src;
    // 图片加载成功
    img.onload = function() {
      loadAction(this.getAttribute('src'));
    }
    // 图片加载失败
    img.onerror = function() {
      loadAction(this.getAttribute('src'));
    }
  })
}

/**
 * 加载方法封装
 */
export const LoadingObj = {
  loadedList: [],
  totalLen: loadAssets.length,
  nextCount: 0,
  loadTimer: null, // 加载定时器
  delay: 100,
  next(cb){
    clearInterval(this.loadTimer);
    this.loadTimer = setInterval(() => {
      if (this.loadedList.length > 0) {
        this.nextCount += 1;
        this.loadedList.pop();
        if (this.nextCount >= this.totalLen) {
          clearInterval(this.loadTimer);
        }
      }
      cb && cb(this.nextCount, this.totalLen);
    }, this.delay)
  }
}

export default {
  worldTopoBathy200401,
  wxCode,
  avatarnew
}