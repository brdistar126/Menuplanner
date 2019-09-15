import Vue from 'vue'
import App from './App'
import { createStore } from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faBars, faClipboard, faPlusSquare, faHome, faAngleLeft, faAngleRight, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrashAlt, faEdit, faBars, faClipboard, faPlusSquare, faHome, faAngleLeft, faAngleRight, faSave)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const store = createStore()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
