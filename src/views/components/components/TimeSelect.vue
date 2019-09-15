<template>
  <div class="time-select">
    <div class="time-select-day">
      <span class="time-select-day-prev" :key="prevWeekDay" @click="onPrevWeekDay"> <font-awesome-icon icon="angle-left"></font-awesome-icon>{{ prevWeekDay }}</span>
      <span class="time-select-day-selected" :key="currentWeekDay">{{ `Week ${time.weekIndex + 1} ` }} / {{ currentWeekDay }}</span>
      <span class="time-select-day-next" :key="nextWeekDay" @click="onNextWeekDay">{{ nextWeekDay }} <font-awesome-icon icon="angle-right"></font-awesome-icon></span>
    </div>

    <div class="time-select-meal">
      <div
        v-for="(meal, mealTime) in MEALS"
        :key="mealTime"
        class="time-select-meal-item"
        @click="() => onSelectMealTime(mealTime)"
        :class="{'selected': time.mealTime === mealTime}"
      >
        {{ meal }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { getWeekToday } from '../../../consts/util'
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
    prevWeekDay () {
      return this.WEEKS[(this.time.weekDay - 1 + 7) % 7]
    },
    nextWeekDay () {
      return this.WEEKS[(this.time.weekDay + 1) % 7]
    },
    currentWeekDay () {
      return this.WEEKS[this.time.weekDay]
    }
  },
  methods: {
    ...mapMutations({
      SET_WEEKDAY: '$_meal/SET_WEEKDAY',
      SET_MEAL_TIME: '$_meal/SET_MEAL_TIME',
      SET_WEEK_INDEX: '$_meal/SET_WEEK_INDEX'
    }),
    ...mapActions({
      PREFETCH_MEAL_MENU: '$_meal/PREFETCH_MEAL_MENU',
      PREFETCH_COMPONENT_DISH: '$_meal/PREFETCH_COMPONENT_DISH'
    }),
    onSelectMealTime (mealTime) {
      this.SET_MEAL_TIME(mealTime)
    },
    onPrevWeekDay () {
      this.PREFETCH_MEAL_MENU({ weekIndex: this.time.weekIndex, weekDay: (this.time.weekDay - 1 + 7) % 7 })
        .then(() => {
          this.PREFETCH_COMPONENT_DISH()
        })
      this.SET_WEEKDAY((this.time.weekDay - 1 + 7) % 7)
    },
    onNextWeekDay () {
      this.PREFETCH_MEAL_MENU({ weekIndex: this.time.weekIndex, weekDay: (this.time.weekDay + 1) % 7 })
        .then(() => {
          this.PREFETCH_COMPONENT_DISH()
        })
      this.SET_WEEKDAY((this.time.weekDay + 1) % 7)
    }
  },
  mounted () {
    const today = new Date()
    let day = today.getDay()
    let week = getWeekToday(today)
    console.log('## CALNDER DEBUG: ', day, week)
    this.SET_WEEKDAY(day)
    this.SET_WEEK_INDEX(week)
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
        cursor: pointer;
        &.selected {
          background-color: #cee874;
        }
      }
    }
  }
</style>
