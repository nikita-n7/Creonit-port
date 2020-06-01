import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    post: [],
  },
  mutations: {
    setPost (store , item) {
      store.post = item
    }
  },
  actions: {
    fetchPost( context ) {
      fetch( 'https://jsonplaceholder.typicode.com/posts')
        .then( resp => resp.json())
        .then( data => context.commit('setPost' , data ) ) 
    }

  },
  getters: {
    posts(state) {
      return state.post
    }
  }
})
