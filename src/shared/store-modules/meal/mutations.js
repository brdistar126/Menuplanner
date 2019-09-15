const SET_MEALS = (state, meals) => {
  state.meals = meals
}
const ADD_MEAL = (state, timeIndex) => {
  state.meals[timeIndex].push([])
}
const SET_WEEKDAY = (state, weekDay) => {
  state.time.weekDay = weekDay
}

const SET_MEAL_TIME = (state, mealTime) => {
  state.time.mealTime = mealTime
}

const REMOVE_DISH = (state, { mealTime, mealIndex, dishIndex }) => {
  state.meals[mealTime][mealIndex].splice(dishIndex, 1)
  if (state.meals[mealTime][mealIndex].length === 0) {
    state.meals[mealTime].splice(mealIndex, 1)
  }
}

const ADD_COMPONENT = (state, { mealTime, mealIndex }) => {
  state.meals[mealTime][mealIndex].push({
    name: 'New Dish',
    type: null
  })
}

const REMOVE_MEAL = (state, { mealTime, mealIndex }) => {
  state.meals[mealTime].splice(mealIndex, 1)
}

const SET_DISH = (state, { mealTime, mealIndex, dishIndex }) => {
  state.time.mealIndex = mealIndex
  state.time.dishIndex = dishIndex
  state.time.mealTime = mealTime
}

const SET_WEEK_INDEX = (state, weekIndex) => {
  state.time.weekIndex = weekIndex
}

export default {
  SET_MEALS,
  ADD_MEAL,
  REMOVE_DISH,
  SET_WEEKDAY,
  SET_MEAL_TIME,
  ADD_COMPONENT,
  REMOVE_MEAL,
  SET_DISH,
  SET_WEEK_INDEX
}
