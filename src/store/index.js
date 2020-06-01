import Vue from 'vue'
import Vuex from 'vuex'

import getters from './modules/getters'
import mutations from './modules/mutations'
import state from './modules/state'

Vue.use(Vuex)

export default new Vuex.Store({
 getters,
 mutations,
 state,
})
