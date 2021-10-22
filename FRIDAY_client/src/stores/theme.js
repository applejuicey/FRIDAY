const USE_THEME = "USE_THEME";

const state = () => ({
  name: ''
});

const getters = {

};

const mutations = {

  // 变更当前使用的主题
  [USE_THEME] (state, { name }) {
    state.name = name;
  },

};

const actions = {

};

export default {
  state,
  getters,
  actions,
  mutations
};