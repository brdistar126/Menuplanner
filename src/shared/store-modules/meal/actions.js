import axios from 'axios'
import { API_DEV_URL } from '../../../consts/consts'

export default {
  POST_MEAL_MENU: async function ({ commit }, data) {
    axios.post(`${API_DEV_URL}/v1/menus`, data.data)
      .then(response => {
        const updateData = {
          index: data.timeIndex,
          data: {
            mealName: response.data.menu.name,
            id: response.data.menu.id,
            model: []
          }
        }
        commit('ADD_MEAL', updateData)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  PREFETCH_MEAL_MENU: async function ({ commit }, data) {
    axios.get(`${API_DEV_URL}/v1/menus?week=${data.weekIndex}&weekDay=${data.weekDay}`)
      .then((res) => {
        commit('PREFETCH_MEALS', res.data.menus)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  DELETE_MEAL_MENU: async function ({ commit }, data) {
    axios.delete(`${API_DEV_URL}/v1/menus/${data.mealId}`)
      .then(() => {
        commit('REMOVE_MEAL', data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  /*
  * CRUD For Components
   */
  POST_COMPONENT_DISH: async function ({ commit }, data) {
    axios.post(`${API_DEV_URL}/v1/components`, data.data)
      .then((response) => {
        const updateData = {
          name: response.data.component.name,
          type: response.data.component.type,
          id: response.data.component.id
        }
        data.data = updateData
        commit('ADD_COMPONENT', data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  PREFETCH_COMPONENT_DISH: async function ({ commit }) {
    axios.get(`${API_DEV_URL}/v1/components`)
      .then((res) => {
        commit('PREFETCH_COMPONENT', res.data.components)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  DELETE_COMPONENT_DISH: async function ({ commit }, data) {
    axios.delete(`${API_DEV_URL}/v1/components/${data.dishId}`)
      .then(() => {
        commit('REMOVE_DISH', data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  PUT_COMPONENT_DISH: async function ({ commit }, data) {
    axios.put(`${API_DEV_URL}/v1/components/${data.dishId}`, data.data)
      .then((result) => {
        commit('PUT_COMPONENT', data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  POST_COMPONENT_PHOTO: async function ({ commit }, data) {
    axios.post(`${API_DEV_URL}/v1/component-photos`, data)
      .then((res) => {
        commit('SET_IMAGES', res.data.componentPhoto)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  PREFETCH_COMPONENT_PHOTO: async function ({ commit }, id) {
    axios.get(`${API_DEV_URL}/v1/component-photos?componentId=${id}`)
      .then((res) => {
        console.log('data: ', res) // fixme
        const data = (res.data.componentPhotos.length > 0)
          ? res.data.componentPhotos[res.data.componentPhotos.length - 1]
          : { componentId: id }
        commit('SET_IMAGES', data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  PUT_COMPONENT_PHOTO: async function ({ commit }, data) {
    axios.put(`${API_DEV_URL}/v1/component-photos/${data.id}`, data.data)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
