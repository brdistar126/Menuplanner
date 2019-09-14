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
    <plan-page></plan-page>
  </div>
</template>

<script>
import Slider from '../components/Slider'
import PlanPage from './components/PlanPage'

export default {
  components: {
    'slider': Slider,
    PlanPage
  }
}
</script>

<style scoped>

</style>
