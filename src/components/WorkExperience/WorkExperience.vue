<script setup>
import { ref, onMounted } from "vue";
// import ResumeBtn from '../ResumeBtn/ResumeBtn.vue';
import * as echarts from "echarts";
import diskData from "./expericeData.js";
import { debounceResize } from "../../utils/common.js";
import DialogMain from "../DialogMain/DialogMain.vue";
// import mzlogo from "../../assets/logo/mzlogo.png";

const echartsContainer = ref();
const dialogContent = ref(null);
const workDesc = ref();

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
});

let myChart = null;
const initCharts = () => {
  myChart = echarts.init(echartsContainer.value);
  const formatUtil = echarts.format;
  function getLevelOption() {
    return [
      {
        itemStyle: {
          borderWidth: 0,
          gapWidth: 5,
        },
      },
      {
        itemStyle: {
          gapWidth: 1,
        },
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          gapWidth: 1,
          borderColorSaturation: 0.6,
        },
      },
    ];
  }
  myChart.setOption({
    // title: {
    //   text: '工作经历',
    //   left: 'center'
    // },
    tooltip: {
      show: !props.isMobile, // 移动商有弹框了，就不要再显示提示框了
      formatter: function (info) {
        var value = info.data.date;
        return [
          '<div class="tooltip-title">' +
            formatUtil.encodeHTML(info.data.path) +
            "</div>",
          "工作岗位: " + info.data.post + "</br>",
          "工作时间: " + value + "</br>",
          "点击可查看详情"
        ].join("");
      },
      // alwaysShowContent: false,
      // hideDelay: 3000,
      // position: (pos, params, dom, rect, size) => {
      // // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
      //   const obj = {top: pos[1]};
      //   obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
      //   return obj;
      // }
    },
    // color: ['transparent'],
    series: [
      {
        name: "工作经历",
        type: "treemap",
        visibleMin: 0,
        roam: false,
        nodeClick: false,
        breadcrumb: {
          show: false,
        },
        label: {
          show: true,
          // backgroundColor: {
          //   image: mzlogo, // 这里导入图片，完成一个需求
          // },
          fontSize: 14,
          formatter: "{b}",
          // formatter: ["{b}\n", "{img|}"].join("\n"),
          // rich: {
          //   img: {
          //     align: "left",
          //     backgroundColor: {
          //       image: mzlogo, // 这里导入图片，完成一个需求
          //     },
          //     color: "#F9F9F9",
          //     fontSize: 14,
          //   },
          // },
        },
        itemStyle: {
          borderColor: "rgba(255,255,255,.6)",
          color: "rgba(0,0,0,0)",
        },
        levels: getLevelOption(),
        width: "99%",
        height: "99%",
        // colorAlpha: [.4,.8],
        data: diskData,
      },
    ],
  });
};

onMounted(() => {
  initCharts();
  debounceResize(myChart);
  // window.addEventListener("resize", function () {
  //   myChart && myChart.resize();
  // });

  const data = [];
  diskData.forEach((item) => data.push(...item.children));
  console.log("---- diskData ----:", diskData, data);
  myChart.on("click", function (params) {
    dialogContent.value = data.find((item) => item.name === params.name);
    console.log(
      "---- myChart click ----",
      params.name,
      dialogContent.value,
      params.name === dialogContent.value.name
    );
    myChart.dispatchAction({
      type: "hideTip",
    });
    workDesc.value.show();
  });
});
</script>

<template>
  <fly-box>
    <div class="w-full h-full relative">
      <div class="w-full h-full" ref="echartsContainer"></div>
      <div
        class="w-full h-[98px] overflow-hidden flex justify-center items-end pointer-events-none absolute bottom-0 left-0"
      >
        <div class="h-[22px]">
          <div
            class="w-full pointer-events-auto flex flex-col items-center cursor-pointer transition-transform hover:translate-y-[-60px]"
          >
            <h3
              class="rounded-t-[5px] text-[14px] text-white font-bold px-[5px] bg-[rgba(0,0,0,.5)]"
            >
              工作经历
            </h3>
            <div
              class="flex items-center rounded-t-[5px] p-[10px] justify-center bg-[rgba(0,0,0,.5)]"
            >
              <p class="text-[14px] text-white mr-[16px]">
                工作经验：15年<br />前端经验：11年
              </p>
              <!-- <resume-btn /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </fly-box>
  <dialog-main ref="workDesc" :isMobile="isMobile">
    <div class="w-full flex flex-col workexprience-con" v-if="dialogContent">
      <h3 class="text-[16px] w-full text-center">{{ dialogContent.name }}</h3>
      <p class="text-[16px] w-full text-center">{{ dialogContent.post }}</p>
      <p class="text-[16px] w-full text-center mb-[10px]">
        {{ dialogContent.date }}
      </p>
      <div
        class="text-[14px] w-full px-[20px] mb-[5px] flex flex-row break-all"
        :class="isMobile ? 'flex-col items-center' : ''"
        v-if="dialogContent.work"
      >
        <span class="whitespace-nowrap">{{
          isMobile ? "职责" : "职责："
        }}</span>
        <p>{{ dialogContent.work }}</p>
      </div>
      <div
        class="text-[14px] w-full px-[20px] mb-[5px] flex flex-row break-all"
        :class="isMobile ? 'flex-col items-center' : ''"
        v-if="dialogContent.desc"
      >
        <span class="whitespace-nowrap">{{
          isMobile ? "详情" : "详情："
        }}</span>
        <p>{{ dialogContent.desc }}</p>
      </div>
    </div>
  </dialog-main>
</template>

<style scoped></style>
