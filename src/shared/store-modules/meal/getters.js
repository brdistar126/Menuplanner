const meals = state => state.meals
const time = state => state.time
const selectedDish = state => {
  if (state.time.dishIndex >= 0) {
    return state.meals[state.time.mealTime][state.time.mealIndex].model[state.time.dishIndex]
  }
  return {}
}
const weekIndex = state => state.time.weekIndex
export default {
  meals,
  time,
  weekIndex,
  selectedDish
}
