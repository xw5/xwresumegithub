<script setup>
import { useRouter } from 'vue-router';
import Particles from '../components/Particles/Particles.vue';
import WorkExperience from '../components/WorkExperience/WorkExperience.vue';
import Keywords from '../components/Keywords/Keywords.vue';
import Skill from '../components/Skill/Skill.vue';
import Relationship from '../components/Relationship/Relationship.vue';
import PersonalData from '../components/PersonalData/PersonalData.vue';
import RollBroadcasting from '../components/RollBroadcasting/RollBroadcasting.vue';
// import FlyBox from './components/FlyBox/FlyBox.vue';
// import DialogMain from './components/DialogMain/DialogMain.vue';
import SectorNav from '../components/SectorNav/SectorNav.vue';

const router = useRouter();
// 导航效果
const navclick = (type) => {
  switch(type) {
    case 'earth':
      router.push({
        name: 'earth'
      })
      break;
    case 'mobile':
      router.push({
        name: 'mobile',
        query: { type: 'mobile' }
      })
      break;
    default:
      break;
  }
}
</script>

<template>
  <particles />
  <div class="w-full h-screen overflow-hidden relative z-10 grid grid-rows-[repeat(10,1fr)] grid-cols-[repeat(10,1fr)] gap-[10px] box-border p-[10px]">
    <div class="row-span-4 col-span-3">
      <roll-broadcasting />
    </div>
    <!-- <div class="bg-[red]">2</div>
    <div class="bg-[red]">3</div> -->
    <div class="row-span-3 col-span-4">
      <personal-data />
    </div>
    <!-- <div class="bg-[red]">5</div>
    <div class="bg-[red]">6</div>
    <div class="bg-[red]">7</div> -->
    <div class="row-span-6 col-span-3">
      <skill />
    </div>
    <!-- <div class="bg-[red]">9</div>
    <div class="bg-[red]">10</div> -->
    <!-- <div class="bg-[red]">11</div>
    <div class="bg-[red]">12</div>
    <div class="bg-[red]">13</div> -->
    <!-- <div class="bg-[red]">14</div>
    <div class="bg-[red]">15</div>
    <div class="bg-[red]">16</div>
    <div class="bg-[red]">17</div> -->
    <!-- <div class="bg-[red]">18</div>
    <div class="bg-[red]">19</div>
    <div class="bg-[red]">20</div> -->
    <!-- <div class="bg-[red]">21</div>
    <div class="bg-[red]">22</div>
    <div class="bg-[red]">23</div> -->
    <!-- <div class="bg-[red]">24</div>
    <div class="bg-[red]">25</div>
    <div class="bg-[red]">26</div>
    <div class="bg-[red]">27</div> -->
    <!-- <div class="bg-[red]">28</div>
    <div class="bg-[red]">29</div>
    <div class="bg-[red]">30</div> -->
    <!-- <div class="bg-[red]">31</div>
    <div class="bg-[red]">32</div>
    <div class="bg-[red]">33</div> -->
    <div class="col-span-4 row-span-7">
      <work-experience />
    </div>
    <!-- <div class="bg-[red]">35</div>
    <div class="bg-[red]">36</div>
    <div class="bg-[red]">37</div> -->
    <!-- <div class="bg-[red]">38</div>
    <div class="bg-[red]">39</div>
    <div class="bg-[red]">40</div> -->
    <div class="col-span-3 row-span-6">
      <relationship />
    </div>
    <!-- <div class="bg-[red]">42</div>
    <div class="bg-[red]">43</div> -->
    <!-- <div class="bg-[red]">44</div>
    <div class="bg-[red]">45</div>
    <div class="bg-[red]">46</div>
    <div class="bg-[red]">47</div> -->
    <!-- <div class="bg-[red]">48</div>
    <div class="bg-[red]">49</div>
    <div class="bg-[red]">50</div> -->
    <!-- <div class="bg-[red]">51</div>
    <div class="bg-[red]">52</div>
    <div class="bg-[red]">53</div> -->
    <!-- <div class="bg-[red]">54</div>
    <div class="bg-[red]">55</div>
    <div class="bg-[red]">56</div>
    <div class="bg-[red]">57</div> -->
    <!-- <div class="bg-[red]">58</div>
    <div class="bg-[red]">59</div>
    <div class="bg-[red]">60</div> -->
    <!-- <div class="bg-[red]">61</div>
    <div class="bg-[red]">62</div>
    <div class="bg-[red]">63</div> -->
    <!-- <div class="bg-[red]">64</div>
    <div class="bg-[red]">65</div>
    <div class="bg-[red]">66</div>
    <div class="bg-[red]">67</div> -->
    <div class="col-span-3 row-span-4">
      <keywords />
    </div>
    <!-- <div class="bg-[red]">69</div>
    <div class="bg-[red]">70</div> -->
    <!-- <div class="bg-[red]">71</div>
    <div class="bg-[red]">72</div>
    <div class="bg-[red]">73</div> -->
    <!-- <div class="bg-[red]">74</div>
    <div class="bg-[red]">75</div>
    <div class="bg-[red]">76</div>
    <div class="bg-[red]">77</div> -->
    <!-- <div class="bg-[red]">78</div>
    <div class="bg-[red]">79</div>
    <div class="bg-[red]">80</div> -->
    <!-- <div class="bg-[red]">81</div>
    <div class="bg-[red]">82</div>
    <div class="bg-[red]">83</div> -->
    <!-- <div class="bg-[red]">84</div>
    <div class="bg-[red]">85</div>
    <div class="bg-[red]">86</div>
    <div class="bg-[red]">87</div> -->
    <!-- <div class="bg-[red]">88</div>
    <div class="bg-[red]">89</div>
    <div class="bg-[red]">90</div> -->
    <!-- <div class="bg-[red]">91</div>
    <div class="bg-[red]">92</div>
    <div class="bg-[red]">93</div> -->
    <!-- <div class="bg-[red]">94</div>
    <div class="bg-[red]">95</div>
    <div class="bg-[red]">96</div>
    <div class="bg-[red]">97</div> -->
    <!-- <div class="bg-[red]">98</div>
    <div class="bg-[red]">99</div>
    <div class="bg-[red]">100</div> -->
  </div>
  <!-- <div class="w-full h-full absolute bg-[#0c1022] inset-0 z-10 flex items-center justify-center">
    <fly-box />
  </div> -->
  <sector-nav @navclick="navclick" />
</template>

<style scoped>

</style>
