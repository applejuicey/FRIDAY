import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
// import cart from './modules/cart'
// import products from './modules/products'

// 全局状态
const state = {
  theme: {},
};

const getters = {

};

const mutations = {
  setTheme: (state, payload) => {
    for (let key in payload) {
      state.theme[key] = payload[key];
    }
  }
};

const store = createStore({
  state,
  getters,
  mutations,
  modules: {
    // cart,
    // products
  },
  plugins: [
    createPersistedState({
      // 只储存state中的以下内容
      reducer(state) {
        return {
          theme: state.theme
        }
      }
    }),
  ],
})

export {
  store
};