import { createStore } from 'vuex'
import { user } from './user/index.js'
import { Dashboard } from './dashboard/index.js'
export default createStore({
  modules: {
    user: user,
    dashboard: Dashboard
  }   
})
