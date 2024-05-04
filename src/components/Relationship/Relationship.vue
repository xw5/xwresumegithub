<template>
  <fly-box>
    <div class="w-full h-full" ref="echartsContainer"></div>
  </fly-box>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from 'echarts';
import { datas, linkmes } from './relationship.js';
import { debounceResize } from "../../utils/common.js";

const echartsContainer = ref(0);

let myEchart = null;
// 渲染图表
const renderChart = () => {
  myEchart = echarts.init(echartsContainer.value);
  const { width, height } = echartsContainer.value.getBoundingClientRect();
  const minWrap = width < height ? width : height;
  console.log('---- renderChart containerRect ----:', width);

  const options = {
    title: {
      show: true,
      text: '家庭成员',
			left: 'center',
			textStyle: {
				color: 'rgba(255,255,255,.68)',
				fontSize: 14
			}
    },
    // backgroundColor: "#1a4377",

    tooltip: {
      formatter: function (info) {
        return [
          '<div class="tooltip-title">' +
            (info.data.desc || info.data.value)+
            '</div>'
        ].join('');
      }
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    color: ["#83e0ff", "#45f5ce", "#b158ff"],
    draggable: true,
    focusNodeAdjacency: true,
    series: [
      {
        type: "graph",
        roam: 'true',
        layout: "force",
        force: {
          repulsion: minWrap,
          edgeLength: minWrap * 0.2,
        },
        label: {
          normal: {
            show: true,
          },
        },
        edgeSymbol: ['arrow', 'arrow'],
        edgeSymbolSize: [10, 10],
        data: datas,
        links: linkmes,
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0,
          },
        },
        categories: [
          {
            name: "0",
          },
          {
            name: "1",
          },
          {
            name: "2",
          },
        ],
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 4
          }
        },
      }
    ],
  };

  myEchart.setOption(options);
};

onMounted(() => {
  renderChart();
  debounceResize(myEchart);
  // window.addEventListener("resize", function () {
  //   myEchart && myEchart.resize();
  // });
});
</script>

<style scoped></style>
