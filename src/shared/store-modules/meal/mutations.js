import { MEALS } from '../../../consts/consts'

/*
Utils start ---
 */
const getTimeIndex = (timeParam) => {
  return MEALS.findIndex((indexItem) => (indexItem.toLowerCase() === timeParam))
}

const isExistId = (id, array) => {
  return array.findIndex((arrItem) => (arrItem.id === id))
}
/*
--- Utils end
 */
const PREFETCH_MEALS = (state, mealData) => {
  state.meals = [[], [], []]
  mealData.forEach((mealItem) => {
    const timeIndex = getTimeIndex(mealItem.time)
    state.meals[timeIndex].push({
      mealName: mealItem.name,
      id: mealItem.id,
      model: []
    })
  })
}

const SET_MEALS = (state, meals) => {
  state.meals = meals
}

const ADD_MEAL = (state, updateData) => {
  state.meals[updateData.index].push(updateData.data)
}

const REMOVE_MEAL = (state, data) => {
  const index = state.meals[data.mealTime].findIndex((item) => (item.id === data.mealId))
  state.meals[data.mealTime].splice(index, 1)
}

const SET_WEEKDAY = (state, weekDay) => {
  state.time.weekDay = weekDay
}

const SET_MEAL_TIME = (state, mealTime) => {
  state.time.mealTime = mealTime
}

const REMOVE_DISH = (state, data) => {
  state.meals[data.mealTime][data.mealIndex].model.splice(data.dishIndex, 1)
  if (state.meals[data.mealTime][data.mealIndex].length === 0) {
    state.meals[data.mealTime].splice(data.mealIndex, 1)
  }
}

const ADD_COMPONENT = (state, data) => {
  state.meals[data.timeIndex][data.mealIndex].model.push({
    name: data.data.name,
    type: data.data.type,
    id: data.data.id
  })
}

const PREFETCH_COMPONENT = (state, data) => {
  data.forEach((componentItem) => {
    state.meals.forEach((mealItem) => {
      const index = isExistId(componentItem.menuId, mealItem)
      if (index !== -1) {
        mealItem[index].model.push({
          name: componentItem.name,
          type: componentItem.type,
          id: componentItem.id
        })
      }
    })
  })
}

const PUT_COMPONENT = (state, data) => {
  state.meals[data.mealTime][data.mealIndex].model[data.dishIndex].type = data.data.type
  state.meals[data.mealTime][data.mealIndex].model[data.dishIndex].name = data.data.name
}

const SET_DISH = (state, { mealTime, mealIndex, dishIndex }) => {
  state.time.mealIndex = mealIndex
  state.time.dishIndex = dishIndex
  state.time.mealTime = mealTime
}

const SET_WEEK_INDEX = (state, weekIndex) => {
  state.time.weekIndex = weekIndex
}

const UPDATE_IMAGES = (state, images) => {
  state.images[state.selectedDishId] = images
}

const SET_IMAGES = (state, images) => {
  console.log(images)
  if (state.images[images.componentId] === undefined) {
    state.images[images.componentId] = {
      main: {},
      ingredients: []
    }
  }
  console.log('SET_IMAGES:', images, state.images[images.componentId], 'asdf', images, images.componentId)
  state.images = {
    ...state.images,
    [images.componentId]: {
      main: {
        name: images.name,
        description: images.description,
        url: images.url,
        id: images.id,
      },
      ingredients: state.images[images.componentId].ingredients
    }
  }
  state.selectedDishId = images.componentId
}

const ADD_INGREDIENT = (state) => {
  console.log('$$$$', state.images)
  console.log('!!!', state.images[state.selectedDishId])
  if (state.images[state.selectedDishId].ingredients === undefined) {
    state.images[state.selectedDishId] = {
      main: state.images[state.selectedDishId].main,
      ingredients: []
    }
  }
  state.images[state.selectedDishId].ingredients.push({
    name: '',
    url: ''
  })
}

const REMOVE_INGREDIENT = (state, index) => {
  const dishId = state.meals[state.time.mealTime][state.time.mealIndex].model[state.time.dishIndex].id
  state.images[dishId].ingredients.splice(index, 1)
}
export default {
  SET_MEALS,
  UPDATE_IMAGES,
  PREFETCH_MEALS,
  ADD_MEAL,
  REMOVE_DISH,
  SET_WEEKDAY,
  SET_MEAL_TIME,
  ADD_COMPONENT,
  PREFETCH_COMPONENT,
  PUT_COMPONENT,
  REMOVE_MEAL,
  SET_DISH,
  SET_WEEK_INDEX,
  SET_IMAGES,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
}
