import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = () => ({
  selectedDishId: -1,
  meals: [
    [], [], []
  ],
  selectedImage: {
    main: {},
    ingredients: []
  },
  time: {
    weekIndex: 0,
    weekDay: 0,
    mealTime: 0,
    mealIndex: 0,
    dishIndex: -1
  },
  meal: {
    mealIndex: 0
  },
  images: {
    40: {
      main: {
        url: '',
        name: '',
        description: ''
      },
      ingredients: [
        {
          url: 'item 1.jpg',
          name: 'item1'
        },
        {
          url: 'item 2.jpg',
          name: 'item2'
        },
        {
          url: 'item 3.jpg',
          name: 'item3'
        }
      ]
    }
  }
})

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
