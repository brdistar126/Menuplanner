<template>
  <div class="time-select">
    <div class="time-select-day">
      <span class="time-select-day-prev">Monday</span>
      <span class="time-select-day-selected">Monday</span>
      <span class="time-select-day-next">Wednesday</span>
    </div>

    <div class="time-select-meal">
      <div
        v-for="(meal, mealIndex) in MEALS"
        :key="mealIndex"
        class="time-select-meal-item"
        @click="selectedMealIndex = mealIndex"
        :class="{'selected': selectedMealIndex === mealIndex}"
      >
        {{ meal }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedMealIndex: -1,
      MEALS: [
        'Breakfast',
        'Lunch',
        'Dinner'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .time-select {
    &-day {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-prev, &-next {
        background-color: #E0E0E0;
        padding: 5px 8px;
      }
      &-selected {
        font-size: 30px;
      }
    }
    &-meal {
      margin-top: 30px;
      width: 100%;
      background-color: #E0E0E0;
      display: flex;
      justify-content: flex-start;
      &-item {
        padding: 20px;
        border-right: 2px solid white;
        &.selected {
          background-color: #d1e294;
        }
      }
    }
  }
</style>
