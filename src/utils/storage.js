class LocalStorage {
  defaultExpired = 0; // 默认过期天数
  
  constructor(options) {
    if (options) {
      if (options.defaultExpired) {
        this.defaultExpired = options.defaultExpired
      }
    }
  }

  /**
   * 设置本地存储
   * @param key 本地存储key
   * @param value 本地存储值
   * @param expiredSeconds 过期秒数
   */
  setItem(key, value, expiredSeconds) {
    const now = Date.now();
    let expired = 0;
    // 有设置默认过期时间才处理过期时间
    if (this.defaultExpired) {
      expired = now + 1000 * 60 * 60 * 24 * this.defaultExpired; // 默认过期时间
    }

    // 这里我们限定了 expired 和 maxAge 都是 number 类型，
    if (expiredSeconds) {
      expired = now + expiredSeconds * 1000;
    }

    localStorage.setItem(
      key,
      expired ? JSON.stringify({
        value,
        expired: expired // 存储的过期时间
      }) : value
    );
  }

  getItem(key) {
    let result = null;
    // 防错
    try {
      result = localStorage.getItem(key);
    }
    catch(err){}
    if (!result) {
      // 若key本就不存在，直接返回null
      return null;
    }
    let value, expired;
    // 支持获取未设置过期时间的本地存储
    try {
      let resultObj = JSON.parse(result);
      if (resultObj && resultObj.value && resultObj.expired) {
        value = resultObj.value;
        expired = resultObj.expired;
      }
    }
    catch(err){}
    if (expired) {
      if (Date.now() <= expired) {
        // 还没过期，返回存储的值
        return value;
      } else {
        // 已过期，删除该key，然后返回null
        this.removeItem(key);
        return null;
      }
    }
    return result;
  }

  // 删除key
  removeItem(key) {
    localStorage.removeItem(key);
  }

  // 清除所有过期的key
  clearAllExpired() {
    let num = 0;

    // 判断 key 是否过期，然后删除
    const delExpiredKey = (key, value) => {
      if (value) {
        let expired = -1;
        try {
          const valueObj = JSON.parse(value);
          if (valueObj && valueObj.expired) {
            expired = valueObj.expired;
          }
        }
        catch(err){
          
        }
        // expired为-1要么是没有设置过期的，要么是parse出错的
        if (expired === -1) {
          return 0;
        }
        if (Date.now() > expired) {
          // 已过期
          localStorage.removeItem(key);
          return 1;
        }
      } else {
        // 若 value 无值，则直接删除
        localStorage.removeItem(key);
        return 1;
      }
      return 0;
    };

    const { length } = window.localStorage;

    for (let i = 0; i < length; i++) {
      const key = window.localStorage.key(i);

      if (key) {
        const value = window.localStorage.getItem(key);
        num += delExpiredKey(key, value);
      }
    }
    return num;
  }
}

export default new LocalStorage();