<template>
  <div class="plan-page">
    <time-select></time-select>
    <meal-list></meal-list>
  </div>
</template>

<script>
import TimeSelect from './components/TimeSelect'
import MealList from './MealTimeList/MealTimeList'

export default {
  components: {
    MealList,
    TimeSelect
  }
}
</script>

<style lang="scss" scoped>
  .plan-page{
    padding: 20px;
  }
  .time-select {
    width: 60vw;
  }
</style>
