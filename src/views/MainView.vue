<template>
  <div>
    <slider
      :width="250"
      format="push"
      direction="left"
      :opacity="0.15"
      :steps="[
        {'id': 1, 'text': 'Planning'},
        {'id': 2, 'text': 'Orders' },
        {'id': 3, 'text': 'Preparation / Delivery'},
      ]"
    >
    </slider>
    <div style="display: flex">
      <plan-page></plan-page>
      <RightSidebar/>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider'
import PlanPage from './components/PlanPage'
import RightSidebar from './components/RightSidebar/RightSidebar'

export default {
  components: {
    'slider': Slider,
    PlanPage,
    RightSidebar
  }
}
</script>

<style scoped>
  .right-sidebar-section{
    margin-top: 50px;
    width:30vw;
    height:60vh;
  }
</style>
