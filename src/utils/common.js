// 生成uid
export const guid = () =>  {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

// 当前设备是移动设备
if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
  
};

// 手机浏览器的 DOM 元素可以通过ontouchstart属性，为touch事件指定监听函数。桌面设备没有这个属性
export function isMobile() { 
  return ('ontouchstart' in document.documentElement); 
};

/**
 * 判断当前网页应该是在移动端状态，还是在PC端状态
 * @returns 
 */
export const pageStatus = () => {
  if (isMobile() || window.innerWidth <= 750) {
    return 'mobile';
  } else {
    return 'pc';
  }
}

const weeksCn = ['星期日', '星期一','星期二','星期三','星期四','星期五','星期六'];
/**
 * @description 时间戳转日期
 * @param { Number, String } timestamp 时间戳
 * @param { String } fmt 转换后的日期格式，如："YYYYMMDD"、"YYYY/MM/DD"、"YYYY-MM-DD hh:mm:ss"、"YYYY年MM月DD日"、"YYY-MM-DD"等等
 * @return { String } 转换后的日期
 */
export function timestampToTime(fmt='YYYY年MM月DD日 hh:mm:ss WW ap', timestamp) {
  const re = /(Y+)/;
  const date = timestamp ? new Date(timestamp) : new Date();
  if (re.test(fmt)) {
    const t = re.exec(fmt)[1];
    fmt = fmt.replace(
      t,
      (date.getFullYear() + "").substring(4 - t.length)
    );
  }

  const o = {
    "M+": date.getMonth() + 1, // 月份
    "D+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  for (let k in o) {
    const regx = new RegExp("(" + k + ")");
    if (regx.test(fmt)) {
      const t = regx.exec(fmt)[1];
      fmt = fmt.replace(
        t,
        t.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }

  const reweek = /(W+)/;
  if (reweek.test(fmt)) {
    const t = reweek.exec(fmt)[1];
    fmt = fmt.replace(
      t,
      weeksCn[date.getDay()]
    );
  }

  const reap = /(ap)/;
  if (reap.test(fmt)) {
    const t = reap.exec(fmt)[1];
    fmt = fmt.replace(
      t,
      date.getHours() >= 12 ? 'PM' : 'AM'
    );
  }
  return fmt;
};

/**
* @desc 函数防抖
* @param func 目标函数
* @param wait 延迟执行毫秒数
* @param immediate true - 立即执行， false - 延迟执行
*/
function debounce(func, wait = 300, immediate = true) {
  let timer;
  return function() {
    let context = this,
    args = arguments;
    if (timer) clearTimeout(timer);
    if (immediate && !timer) {
      func.apply(context, args);
    }
    timer = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

/**
 * 动态绘制防抖
 * @param {Object} chart 
 */
export const debounceResize = (chart) => {
  const resizeBack = function () {
    chart && chart.resize();
  }
  window.addEventListener("resize", debounce(resizeBack), false);
}