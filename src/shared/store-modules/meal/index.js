import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { DISH_TYPES, DISHES } from '../../../consts/consts'

const state = () => ({
  meals: [
    [
      [
        {
          name: DISHES[1],
          type: DISH_TYPES[1]
        }
      ],
      [
        {
          name: DISHES[1],
          type: DISH_TYPES[1]
        },
        {
          name: DISHES[2],
          type: DISH_TYPES[2]
        }
      ]
    ],
    [
      [
        {
          name: DISHES[1],
          type: DISH_TYPES[1]
        },
        {
          name: DISHES[2],
          type: DISH_TYPES[2]
        }
      ]
    ],
    [
      [
        {
          name: DISHES[1],
          type: DISH_TYPES[1]
        }
      ]
    ]
  ],
  time: {
    weekIndex: 22,
    weekDay: 0,
    mealTime: 0
  },
  meal: {
    mealIndex: 0
  }
})

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
