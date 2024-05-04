<template>
	<fly-box>
		<div class="w-full h-full" ref="echartsContainer"></div>
		<toggle-nav v-show="!isMobile" :list="chartList" @toggle="togleChart" ref="navBar" />
		<div v-show="isMobile" class="absolute bottom-0 right-0 h-full flex flex-col justify-center overflow-hidden">
			<span @click="toggle('bar')" class="iconfont w-[.8rem] h-[.8rem] rounded-bl-[.1rem] rounded-tl-[.1rem] flex items-center justify-center cursor-pointer bg-[rgba(255,255,255,.5)] mb-[.2rem] toggle-btn" :class="chartType === 'bar' ? 'active' : ''">&#xe639;</span>
			<span @click="toggle('radar')" class="iconfont w-[.8rem] h-[.8rem] rounded-bl-[.1rem] rounded-tl-[.1rem] flex items-center justify-center cursor-pointer bg-[rgba(255,255,255,.5)] toggle-btn" :class="chartType === 'radar' ? 'active' : ''">&#xe8bd;</span>
		</div>
	</fly-box>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue';
import * as echarts from 'echarts';
import ToggleNav from '../ToggleNav/ToggleNav.vue';
import { barOptions, radarOptions } from './skillOptions.js';
import storage from '../../utils/storage.js';
import { debounceResize } from "../../utils/common.js";

defineProps({
	isMobile: {
		type: Boolean,
		default: false
	}
})

const echartsContainer = ref();
const navBar = ref();
const chartType = ref('bar');

const realyOption = computed(() => {
	if (chartType.value === 'bar') {
		return JSON.parse(JSON.stringify(barOptions));
	} else {
		return JSON.parse(JSON.stringify(radarOptions));
	}
});

const chartList = ref([
	{
		icon: '&#xe639;',
		title: '柱状图',
		type: 'bar'
	},{
		icon: '&#xe8bd;',
		title: '雷达图',
		type: 'radar'
	}
]);
let myEchart = null;

// 切换图表类型
const togleChart = (item, index) => {
	if (item.title === '柱状图' && chartType.value === 'bar') {
		return;
	}
	if (item.title === '雷达图' && chartType.value === 'radar') {
		return;
	}
	myEchart.clear();
	// const options = item.title === '柱状图' ? barOptions : radarOptions;
	chartType.value = item.title === '柱状图' ? 'bar' : 'radar';
	try {
		storage.setItem('SKILL_CHART_TYPE', item.title === '柱状图' ? 'bar' : 'radar')
	}
	catch(err){
		console.log('---- SKILL_CHART_TYPE ----:set', err);
	}
	renderChart(realyOption.value);
}

// 渲染图表
const renderChart = (options) => {
	if (!myEchart) {
		myEchart = echarts.init(echartsContainer.value);
	}
	myEchart.setOption(options);
	if (options.series[0].type === 'radar') {
		myEchart.on('mousemove', (params) => {
			if(chartType.value === 'bar') {
				return;
			}
			let num = params.event.topTarget.__dimIdx;
			if (num === undefined) {
				options.tooltip.show = false;
				options.tooltip.formatter = function () {
					return '';
				};
			} else {
				options.tooltip.show = true;
				options.tooltip.formatter = function (params) {
					return (
						options.radar.indicator[num].name +
						' 熟练度：' +
						options.series[0].data[0].value[num]
					);
				};
			}
			myEchart.setOption(options);
		});
	}
}

// 移动端切换图表
const toggle = (type) => {
	myEchart.clear();
	chartType.value = type;
	renderChart(realyOption.value);
}

onMounted(() => {
	let type = 'bar';
	try {
		type = storage.getItem('SKILL_CHART_TYPE')
	}
	catch(err){
		console.log('---- SKILL_CHART_TYPE ----:get', err);
	}
	navBar.value.setIndex(type === 'bar' ? 0 : 1);
	chartType.value = type;
  renderChart(realyOption.value);
	debounceResize(myEchart);
	// window.addEventListener('resize', function() {
	// 	myEchart && myEchart.resize();
	// });
})
</script>

<style scoped>
.toggle-btn{
	font-size: 24px;
	color:rgba(255,255,255,.4);
	transform: translateX(.1rem);
	transition: transform .4s,color .4s;
}
.toggle-btn.active{
	color:rgba(255,255,255,1);
	transform: translateX(0);
}
</style>