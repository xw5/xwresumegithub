export const datas = [{
  name: '我',
  symbolSize: 60,
  draggable: true,//加上这句话后不可点击
  desc: '我就是我',
  category: 0,
  itemStyle: {
      normal: {
          borderColor: '#04f2a7',
          borderWidth: 3,
          shadowBlur: 20,
          shadowColor: '#04f2a7',
          color: '#001c43',
      }
  }
}, {
  name: '爸爸',
  symbolSize: 50,
  desc: '时时为我操心的爸爸',
  itemStyle: {
      normal: {
          borderColor: '#04f2a7',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43',
      }
  },
  category: 1,

}, {
  name: '妈妈',
  symbolSize: 40,
  category: 1,
  desc: '唠叨但十分爱我的妈妈',
  itemStyle: {
      normal: {
          borderColor: '#04f2a7',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43',
      }
  },

}, {
  name: '哥哥',
  symbolSize: 40,
  category: 1,
  desc: '聪明能干的哥哥',
  itemStyle: {
      normal: {
          borderColor: '#82dffe',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43',
      }
  },

}, {
  name: '妹妹',
  symbolSize: 40,
  desc: '漂亮善解人意的妹妹',
  category: 1,
  itemStyle: {
      normal: {
          borderColor: '#82dffe',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43',
      }
  },

}, {
  name: '嫂子',
  symbolSize: 50,
  desc: '勤劳持家的嫂子',
  category: 2,
  itemStyle: {
      normal: {
          borderColor: '#82dffe',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43',
      }
  },

}, {
  name: '媳妇',
  symbolSize: 40,
  category: 2,
  desc: '漂亮可爱的老婆',
  itemStyle: {
      normal: {
          borderColor: '#b457ff',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#b457ff',
          color: '#001c43'
      }
  },

}, {
  name: '大侄子',
  symbolSize: 40,
  desc: '聪明有点贪玩的大侄子',
  itemStyle: {
      normal: {
          borderColor: '#82dffe',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43'

      }
  },
  category: 2,

}, {
  name: '小侄子',
  symbolSize: 40,
  desc: '聪明懂事的小侄子',
  itemStyle: {
      normal: {
          borderColor: '#82dffe',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43'
      }
  },
  category: 2,

}, {
  name: '伯父',
  symbolSize: 40,
  desc: '勤劳本份的伯父',
  itemStyle: {
      normal: {
          borderColor: '#82dffe',
          borderWidth: 2,
          shadowBlur: 10,
          shadowColor: '#04f2a7',
          color: '#001c43'
      }
  },
  category: 2,

}, {
    name: '小宝(猫)',
    symbolSize: 40,
    category: 2,
    desc: '乖巧粘人的小喵喵',
    itemStyle: {
        normal: {
            borderColor: '#82dffe',
            borderWidth: 2,
            shadowBlur: 10,
            shadowColor: '#04f2a7',
            color: '#001c43'
        }
    },
  }, {
    name: '大宝(猫)',
    symbolSize: 40,
    desc: '干饭王体重10斤的肥猫',
    category: 2,
    itemStyle: {
        normal: {
            borderColor: '#82dffe',
            borderWidth: 2,
            shadowBlur: 10,
            shadowColor: '#04f2a7',
            color: '#001c43'
        }
    },
  }, {
    name: '村花(猫)',
    symbolSize: 40,
    category: 2,
    desc: '胆小怕人的小猫咪',
    itemStyle: {
        normal: {
            borderColor: '#82dffe',
            borderWidth: 2,
            shadowBlur: 10,
            shadowColor: '#04f2a7',
            color: '#001c43'
        }
    },
  }
];
export const linkmes = [{
      source: '我',
      target: '爸爸',
      value: '父子'
  }, {
      source: '我',
      target: '妈妈',
      value: '母子'
  }, {
      source: '我',
      target: '媳妇',
      value: '夫妻'
  },
  {
      source: '我',
      target: '哥哥',
      value: '兄弟'
  }, {
      source: '我',
      target: '妹妹',
      value: '兄妹'
  }, {
      source: '我',
      target: '嫂子',
      value: '叔嫂'
  }, {
    source: '我',
    target: '大侄子',
    value: '叔侄'
  }, {
    source: '我',
    target: '小侄子',
    value: '叔侄'
  }, {
      source: '我',
      target: '小宝(猫)',
      value: '主宠'
  }, {
      source: '我',
      target: '大宝(猫)',
      value: '主宠'
  }, {
      source: '我',
      target: '村花(猫)',
      value: '主宠',
  }, {
    source: '我',
    target: '伯父',
    value: '叔侄',
}
]; //连接的信息

// 数据
// let data = {
//   nodes = [
//       // {symbol: 'image://http://127.0.0.1:8080/icon/littleMan_blue1.png'/ symbol: 'circle',symbolSize: 80, name: "李小璐", category: 0},
//       {
//           symbolSize: 80,
//           name: "李小璐",
//           category: 0
//       },
//       {
//           symbolSize: 60,
//           name: "贾乃亮",
//           category: 1
//       },
//       {
//           symbolSize: 40,
//           name: "王子文",
//           category: 2
//       },
//       {
//           symbolSize: 60,
//           name: "葛优",
//           category: 1
//       },
//       {
//           symbolSize: 40,
//           name: "陈飞宇",
//           category: 2
//       },
//       {
//           symbolSize: 60,
//           name: "乔任梁",
//           category: 1
//       },
//       {
//           symbolSize: 40,
//           name: "赵英博",
//           category: 2
//       },
//       {
//           symbolSize: 60,
//           name: "赵英俊",
//           category: 1
//       },
//       {
//           symbolSize: 40,
//           name: "张杰",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "大鹏",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "王源",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "袁姗姗",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "徐峥",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "卢正雨",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "董成鹏",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "王宝强",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "李宇春",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "薛之谦",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "陈思诚",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "杨庆",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "赵本山",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "张靓颖",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "包贝尔",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "高超",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "李荣浩",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "张文",
//           category: 2
//       },
//       {
//           symbolSize: 40,
//           name: "张译",
//           category: 2
//       },
//       {
//           symbolSize: 60,
//           name: "pgone",
//           category: 1
//       }
//   ],
//   categories = [ //symbol name：用于和 legend 对应以及格式化 tooltip 的内容。 label有效
//       //    每一级的单独设置
//       {
//           name: "类目一",
//           symbol: 'rect',// 一级节点的图形,如：'circle'
//           label: { //圆点标签样式
//               show: true,
//               color: '#cde6c7'，//一级节点颜色
//               fontSize:18,//一级节点字体大小
//           },
//           normal: {
//               color: 'red', //所有一级的节点色
//           },
//           itemStyle : { //节点(方块/圆点)配置
//               normal: {
//                   color: colorList[ind],//一级节点圆点背景色
//               }
//           }
//       },
//       {
//           name: "类目二",
//           symbol: 'rect',
//           label: { //标签样式
//               show: true,
//               color: '#cde6c7'
//           },
//           normal: {
//               color: 'pink', //所有二级的节点色
//           }
//       },
//       {
//           name: "类目三",
//           symbol: 'rect',
//           label: { //标签样式
//               show: true,
//               color: '#cde6c7'
//           },
//           normal: {
//               color: 'yellow', //所有三级的节点色
//           }
//       }
//   ],
//   links = [//source可以为number、string类型(如 name)。edges是其别名代表节点间的关系数据。
//       {
//           source: "李小璐",
//           value: "结婚",
//           target: "贾乃亮"
//       },
//       {
//           source: "贾乃亮",
//           value: "合作",
//           target: "王子文"
//       },
//       {
//           source: "贾乃亮",
//           value: "合作",
//           target: "赵英俊"
//       },
//       {
//           source: "李小璐",
//           value: "合作",
//           target: "贾乃亮"
//       },
//       {
//           source: "李小璐",
//           value: "合作",
//           target: "葛优"
//       },
//       {
//           source: "葛优",
//           value: "合作",
//           target: "陈飞宇"
//       },
//       {
//           source: "李小璐",
//           value: "合作",
//           target: "乔任梁"
//       },
//       {
//           source: "乔任梁",
//           value: "合作",
//           target: "赵英博"
//       },
//       {
//           source: "李小璐",
//           value: "合作",
//           target: "赵英俊"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "张杰"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "大鹏"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "王源"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "袁姗姗"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "徐峥"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "卢正雨"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "董成鹏"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "王宝强"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "李宇春"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "薛之谦"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "陈思诚"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "杨庆"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "赵本山"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "张靓颖"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "包贝尔"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "高超"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "李荣浩"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "张文"
//       },
//       {
//           source: "赵英俊",
//           value: "合作",
//           target: "张译"
//       },
//       {
//           source: "李小璐",
//           value: "分手",
//           target: "pgone"
//       },
//       {
//           source: "李小璐",
//           value: "分手",
//           target: "贾乃亮"
//       }
//   ]
// }