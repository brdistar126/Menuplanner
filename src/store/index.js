import Vue from 'vue'
import Vuex from 'vuex'
import MealModule from '../shared/store-modules/meal/index'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      $_meal: MealModule
    }
  })
}
