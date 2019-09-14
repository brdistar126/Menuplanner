<template>
  <div class="plan-page">
    <time-select></time-select>
    <meal-list></meal-list>
  </div>
</template>

<script>
import TimeSelect from './components/TimeSelect'
import MealList from './MealTimeList/MealTimeList'
import IconButton from '../../shared/IconButton/IconButton'

export default {
  components: {
    MealList,
    TimeSelect,
  }
}
</script>

<style lang="scss" scoped>
  .time-select {
    width: 60vw;
  }
</style>
