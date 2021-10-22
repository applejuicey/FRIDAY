import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import { api } from "../services/index";
import theme from './theme';
import auth from '../modules/auth/store';

const store = createStore({
  modules: {
    auth,
    theme,
  },
  plugins: [
    // 持久化存储-防止页面刷新后丢失数据
    createPersistedState({
      // 只储存state中的以下内容
      reducer(state) {
        return {
          theme: state.theme
        }
      }
    }),
    // 可以在vuex中使用$api访问后端服务
    function(store) {
      try {
        store.$api = api;
      } catch (e) {
        console.error(e);
      }
    },
  ],
})

export {
  store
};