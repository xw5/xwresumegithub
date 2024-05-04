<template>
	<fly-box>
		<div class="w-full h-full" ref="echartsContainer"></div>
	</fly-box>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import keywords from './keywords.js';
import { debounceResize } from "../../utils/common.js";

const echartsContainer = ref();

/**
 * 生成随机色值
 */
 const randomRGB = () => {
	const r = Math.floor(64+Math.random() * 255);
	const g = Math.floor(64+Math.random() * 255);
	const b = Math.floor(64+Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`
}
let myEchart = null;
// 渲染图表
const renderChart = () => {
	myEchart = echarts.init(echartsContainer.value);
	const options = {
		series: [
			{
				// 类型
				type: 'wordCloud',
				// 数据映射文本的大小范围
				sizeRange: [10, 56],
				// 文字旋转范围
				rotationRange: [0, 60],
				shrinkToFit: true,
				// 单词之间的间距
				gridSize: 0,
				width: '90%',
				height: '90%',
				// 渲染动画
				layoutAnimation: true,
				// 字体
				textStyle: {
					// 随机色值
					color: randomRGB
				},
				// 高亮字体
				emphasis: {
					// focus: 'self',
					textStyle: {
						fontWeight: 'bold',
						color: '#fff'
					}
				},
				// 数据
				data: keywords
			}
		]
	}

	myEchart.setOption(options)
}

onMounted(() => {
  renderChart();
	debounceResize(myEchart);
	// window.addEventListener('resize', function() {
	// 	myEchart && myEchart.resize();
	// });
})

</script>

<style scoped>

</style>