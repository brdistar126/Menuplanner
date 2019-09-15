const meals = state => state.meals
const time = state => state.time
const meal = state => state.meal
const selectedDish = state => {
  if (state.time.dishIndex >= 0) {
    return state.meals[state.time.mealTime][state.time.mealIndex][state.time.dishIndex]
  }
  return {}
}
const weekIndex = state => state.time.weekIndex
export default {
  meals,
  time,
  meal,
  weekIndex,
  selectedDish
}
