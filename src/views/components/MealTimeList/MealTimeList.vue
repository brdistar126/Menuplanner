<template>
  <div class="meal-time-list">
    <div
      v-for="(mealTime, time) in mealTimes"
      :key="mealTime"
      class="meal-time-item"
    >
      <span class="meal-time-item-title">{{ mealTime }}</span>
      <icon-button
        title="ADD NEW MENU"
        :on-click="() => addNewMeal(time)"
        icon="plus-square"
      ></icon-button>
      <div v-if="!prefetchFlag" >
        <meal-item
          v-for="(meal, mealIndex) in meals[time]"
          :key="mealIndex"
          :meal="meal"
          :meal-time="time"
          :meal-index="meal.id"
          :index="mealIndex"
          :deleteMeal="deleteMeal"
        >
        </meal-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { MEALS } from '../../../consts/consts'
import IconButton from '../../../shared/IconButton/IconButton'
import MealItem from '../MealItem/MealItem'

export default {
  components: {
    MealItem,
    IconButton
  },
  data () {
    return {
      prefetchFlag: true
    }
  },
  computed: {
    ...mapGetters({
      meals: '$_meal/meals',
      time: '$_meal/time'
    }),
    mealTimes () {
      return MEALS
    }
  },
  methods: {
    ...mapActions({
      POST_MEAL_MENU: '$_meal/POST_MEAL_MENU',
      PREFETCH_MEAL_MENU: '$_meal/PREFETCH_MEAL_MENU',
      DELETE_MEAL_MENU: '$_meal/DELETE_MEAL_MENU',
      PREFETCH_COMPONENT_DISH: '$_meal/PREFETCH_COMPONENT_DISH'
    }),
    addNewMeal (timeIndex) {
      const data = {
        data: {
          'week': this.time.weekIndex,
          'weekDay': this.time.weekDay,
          'time': MEALS[timeIndex].toLowerCase(),
          'name': `MEAL${this.meals[timeIndex].length + 1}`
        },
        timeIndex
      }
      this.POST_MEAL_MENU(data)
    },
    deleteMeal (timeIndex, id) {
      this.DELETE_MEAL_MENU({
        mealTime: timeIndex,
        mealId: id
      })
    }
  },
  mounted () {
    this.prefetchFlag = true
    this.PREFETCH_MEAL_MENU({ weekIndex: this.time.weekIndex, weekDay: this.time.weekDay })
      .then(() => {
        this.PREFETCH_COMPONENT_DISH()
          .then(() => {
            this.prefetchFlag = false
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .meal-time-list {
    overflow-y: scroll;
    height: 75vh;
    .meal-time-item {
      display: flex;
      flex-direction: column;
      .icon-button {
        margin: 20px 0;
      }
      .meal-time-item-title {
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
        background: #C0C0C0;
        margin: 5px 0;
        padding: 10px ;
      }
    }
  }

</style>
