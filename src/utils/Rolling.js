// 文字滚播类
export default class Rolling {
  constructor(elementSelect) {
    this.wrap = document.querySelector(elementSelect);
    this.wrapH = this.wrap.offsetHeight;
    this.rollList = this.wrap.children[0];
    this.rollList.style.transition = 'transform .4s ease-in-out';
    this.rollItems = null;
    this.rollItemHs = [];
    this.playIndex = -1;
    this.initSuccess = false;
    this.timer = null;
    this.init();
  }
  
  init() {
    if (this.rollList.offsetHeight <= this.wrapH || this.initSuccess) {
      return;
    }
    this.initSuccess = true;
    this.rollList.innerHTML = this.rollList.innerHTML + this.rollList.innerHTML;
    this.rollItems = this.rollList.children;
    for(let i=0,len=this.rollItems.length/2; i<len; i++) {
      let perScrollSize = 0;
      if (this.rollItemHs.length > 0) {
        perScrollSize = this.rollItemHs[this.rollItemHs.length -1];
      }
      // console.log('---- this.rollItems[i].offsetHeight ----:', i,this.rollItems[i].offsetHeight);
      this.rollItemHs.push(perScrollSize + this.rollItems[i].offsetHeight);
    }
    this.play();
    // 鼠标移入暂停滚播
    this.wrap.addEventListener('mouseenter', () => {
      this.pause();
    }, false);

    // 鼠标移出恢复滚播
    this.wrap.addEventListener('mouseleave', () => {
      this.play();
    }, false);
  }

  // 启动滚播
  play() {
    this.timer = setInterval(() => {
      this.roll();
    }, 2000)
  }

  // 暂停滚播
  pause() {
    clearInterval(this.timer);
  }

  // 滚播方法
  roll() {
    this.playIndex += 1;
    this.rollList.style.transition = 'transform .4s ease-in-out';
    this.rollList.style.transform = `translateY(-${this.rollItemHs[this.playIndex]}px)`;
    if (this.playIndex>=this.rollItemHs.length - 1) {
      setTimeout(() => {
        this.rollList.style.transition = 'none';
        this.rollList.style.transform = 'translateY(0)';
        this.playIndex = -1;
      }, 500);
    }
  }
}