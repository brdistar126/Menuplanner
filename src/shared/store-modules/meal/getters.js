const meals = state => state.meals
const time = state => state.time
const selectedDish = state => {
  console.log('selectedID:', state.selectedDishId)
  if (state.time.dishIndex >= 0) {
    if (state.meals[state.time.mealTime][state.time.mealIndex].model[state.time.dishIndex].id === state.selectedDishId) {
      console.log('selectedDish', state.meals[state.time.mealTime][state.time.mealIndex].model[state.time.dishIndex])
      return state.meals[state.time.mealTime][state.time.mealIndex].model[state.time.dishIndex]
    }
  }
  return {}
}
const selectedImages = state => {
  if (state.selectedDishId >= 0) {
    console.log(state.images[state.selectedDishId], state.selectedDishId)
    return state.images[state.selectedDishId] || {
      main: {
        name: '',
        url: '',
        description: ''
      },
      ingredients: []
    }
  }
  return {}
}
const weekIndex = state => state.time.weekIndex
export default {
  meals,
  time,
  weekIndex,
  selectedDish,
  selectedImages
}
