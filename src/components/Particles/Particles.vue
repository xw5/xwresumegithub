<template>
  <div class="w-full h-full fixed inset-0" id="particles-js"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import '../../utils/particles.js';
import {effects} from './particles.js';
const count = ref(0);

onMounted(() => {
  const randomIndex = Math.floor(effects.length * Math.random());
  console.log('---- onMounted ----:', randomIndex);
  window.particlesJS('particles-js', effects[randomIndex]);
	// window.addEventListener('resize', () => {
	// 	document.querySelector('#particles-js').innerHTML = '';
	// 	window.particlesJS('particles-js', effects[randomIndex]);
	// }, false)
})

</script>

<style scoped>

</style>