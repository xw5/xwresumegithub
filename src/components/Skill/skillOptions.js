import * as echarts from 'echarts';

const dataAxis = ['HTML5', 'CSS3','JavaScript','TypeScript', 'Vue', 'React', 'Webpack', 'Vite', 'Gulp', 'uni-app', 'Taro', 'Electron'];
const data = [86, 86, 86, 70, 80, 70, 70, 70, 70, 80, 70, 70];

export const barOptions = {
  title: {
    text: '个人技能',
    left: 'center',
    textStyle: {
      color: 'rgba(255,255,255,.68)',
      fontSize: 14
    }
    // subtext: '个人技能+熟练度'
  },
  grid:[
    {
      left: 10,
      top: '8%',
      bottom: 10,
      containLabel: true
    }
  ],
  yAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    inverse: true,
    z: 10
  },
  xAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  tooltip: {
    show: true,
    formatter: '{b} 熟练度：{c}'
  },
  series: [
    {
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        borderRadius: [20]
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ]),
        borderRadius: [20]
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      data: data
    }
  ]
}

export const radarOptions = {
  title: {
    text: '个人技能',
    left: 'center',
    textStyle: {
      color: 'rgba(255,255,255,.68)',
      fontSize: 14
    }
    // subtext: '个人技能+熟练度'
  },
  // grid:[
  //   {
  //     left: '10%',
  //     top: '18%',
  //     bottom: 10,
  //     containLabel: true
  //   }
  // ],
  tooltip : {
    show:false,
    triggerOn: 'mousemove',
    formatter:function(params){
      return '';
    }
  },
  radar: {
    // shape: 'circle',
    indicator: dataAxis.map((item) => ({
      name: item,
      max: 100
    })),
    radius: '65%',
    center: ['50%', '50%'],//位置
    name: {
      textStyle: {
        padding: [-10, -12]
      }
    }
  },
  series: [
    {
      name: '常用技术熟练度',
      type: 'radar',
      data: [
        {
          value: data,
          name: '常用技术熟练度'
        }
      ],
      lineStyle: {
        width: 2
      },
    }
  ]
};