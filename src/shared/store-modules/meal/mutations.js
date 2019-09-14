const SET_MEALS = (state, meals) => {
  state.meals = meals
}
const ADD_MEAL = (state, timeIndex) => {
  state.meals[timeIndex].push(
    [{
      name: 'New Dish',
      type: null
    }]
  )
}

const REMOVE_DISH = (state, { mealTime, mealIndex, dishIndex }) => {
  state.meals[mealTime][mealIndex].splice(dishIndex, 1)
  if (state.meals[mealTime][mealIndex].length === 0) {
    state.meals[mealTime].splice(mealIndex, 1)
  }
}

export default {
  SET_MEALS,
  ADD_MEAL,
  REMOVE_DISH
}
