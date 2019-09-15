<template>
  <div id="header">
    <font-awesome-icon icon="home"></font-awesome-icon>
    <font-awesome-icon icon="angle-right"></font-awesome-icon>
    <span>Planning</span>
    <font-awesome-icon icon="angle-right"></font-awesome-icon>
    <span>Week</span>
    <font-awesome-icon icon="angle-right"></font-awesome-icon>
    <span>{{ currentWeekDay }}</span>
    <font-awesome-icon icon="angle-right"></font-awesome-icon>
    <span>{{ currentMealTime }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MEALS, WEEKS } from '../../../consts/consts'
export default {
  data () {
    return {
      MEALS,
      WEEKS,
      currentWeekDayIndex: 4
    }
  },
  computed: {
    ...mapGetters({
      time: '$_meal/time'
    }),
    currentWeekDay () {
      return this.WEEKS[this.time.weekDay]
    },
    currentMealTime () {
      return this.MEALS[this.time.mealTime]
    }
  },
  name: 'Header'
}
</script>

<style scoped>
  #header{
    width: 100%;
    height: 50px;
    z-index: 999;
    position: fixed;
    background-color: #fff;
    font-size: 20px;
    border-bottom: 1px solid black;
    font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
  }
  svg{
    font-size: 23px;
    padding: 12px 20px 0 20px;
  }

</style>
