<template>
  <div class="meal-list">
    <div
      v-for="mealTime in mealTimes"
      class="meal-item"
    >
      <span class="meal-item-add">ADD NEW MEAL</span>
      <div
        v-for="(meal, mealIndex) in meals[mealTime]"
        :key="mealIndex"
        class="meal-item-meal"
      >

      </div>
    </div>
  </div>
</template>

<script>
import { MEALS } from '../../../consts/consts'

export default {
  data () {
    return {
      meals: {
        breakfast: [],
        lunch: [],
        dinner: []
      }
    }
  },
  computed: {
    mealTimes () {
      return MEALS
    }
  }
}
</script>

<style scoped>

</style>
