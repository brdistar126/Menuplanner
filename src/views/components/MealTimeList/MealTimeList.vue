<template>
  <div class="meal-time-list">
    <div
      v-for="(mealTime, time) in mealTimes"
      :key="mealTime"
      class="meal-time-item"
    >
      <span class="meal-time-item-title">{{ mealTime }}</span>
      <icon-button title="ADD NEW MEAL" :on-click="() => addNewMeal(time)"></icon-button>
      <meal-item
        v-for="(meal, mealIndex) in meals[time]"
        :key="mealIndex"
        :meal="meal"
        :meal-time="time"
        :meal-index="mealIndex"
      >
      </meal-item>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { MEALS } from '../../../consts/consts'
import DishItem from '../DishItem/DishItem'
import IconButton from '../../../shared/IconButton/IconButton'
import MealItem from '../MealItem/MealItem'

export default {
  components: {
    MealItem,
    IconButton
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      meals: '$_meal/meals'
    }),
    mealTimes () {
      return MEALS
    }
  },
  methods: {
    ...mapMutations({
      ADD_MEAL: '$_meal/ADD_MEAL'
    }),
    addNewMeal (timeIndex) {
      this.ADD_MEAL(timeIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
  .meal-time-list {
    .meal-time-item {
      display: flex;
      flex-direction: column;
      .icon-button {
        margin-bottom: 10px;
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
