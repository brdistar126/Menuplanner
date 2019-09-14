<template>
  <div class="time-select">
    <div class="time-select-day">
      <span class="time-select-day-prev" @click="onPrevWeekDay"> <font-awesome-icon icon="angle-left"></font-awesome-icon>{{ prevWeekDay }}</span>
      <span class="time-select-day-selected">Week22 / {{ currentWeekDay }}</span>
      <span class="time-select-day-next" @click="onNextWeekDay">{{ nextWeekDay }} <font-awesome-icon icon="angle-right"></font-awesome-icon></span>
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
import { mapGetters, mapMutations } from 'vuex'
import { MEALS, WEEKS } from '../../../consts/consts'

export default {
  data () {
    return {
      selectedMealIndex: -1,
      MEALS,
      WEEKS,
      currentWeekDayIndex: 4,
      mealIndex: 1
    }
  },
  computed: {
    ...mapGetters({
      time: '$_meal/time',
      meal: '$_meal/meal'
    }),
    prevWeekDay () {
      if (this.currentWeekDayIndex === 0) {
        return this.WEEKS[this.WEEKS.length - 1]
      }
      return this.WEEKS[this.currentWeekDayIndex - 1]
    },
    nextWeekDay () {
      if (this.currentWeekDayIndex === this.WEEKS.length - 1) {
        return this.WEEKS[0]
      }
      return this.WEEKS[this.currentWeekDayIndex + 1]
    },
    currentWeekDay () {
      return this.WEEKS[this.currentWeekDayIndex]
    }
  },
  methods: {
    ...mapMutations({
      SET_WEEKDAY: '$_meal/SET_WEEKDAY',
      SET_MEAL: '$_meal/SET_MEAL'
    }),
    onSelectMeal () {
      console.log('aaa', this.currentMealIndex)
      this.SET_MEAL(this.currentMealIndex)
    },
    onPrevWeekDay () {
      this.currentWeekDayIndex = (this.currentWeekDayIndex - 1 + 7) % 7
      this.SET_WEEKDAY(this.currentWeekDayIndex)
    },
    onNextWeekDay () {
      this.currentWeekDayIndex = (this.currentWeekDayIndex + 1) % 7
      this.SET_WEEKDAY(this.currentWeekDayIndex)
    }
  },
  mounted () {
    this.currentWeekDayIndex = this.time.weekDay
    this.currentMealIndex = this.meal.mealIndex
  }
}
</script>

<style lang="scss" scoped>
  .time-select-day{
    padding: 30px 150px 0 150px;
    font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
  }
  .time-select {
    &-day {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-prev, &-next {
        background-color: #E0E0E0;
        padding: 5px 8px;
        cursor: pointer;
        user-select: none;
        font-weight: 600;
        svg {
          padding: 0 5px;
        }
      }
      &-selected {
        font-size: 32px;
        font-weight: 700;
      }
    }
    &-meal {
      margin-top: 30px;
      width: 100%;
      background-color: #E0E0E0;
      display: flex;
      justify-content: flex-start;
      &-item {
        padding: 10px 20px;
        border-right: 2px solid white;
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
        font-weight: 500;
        font-size: 18px;
        &.selected {
          background-color: #d1e294;
        }
      }
    }
  }
</style>
