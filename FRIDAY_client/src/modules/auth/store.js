const ADD_USERS = "ADD_USERS";

const state = () => ({
  items: [],
  checkoutStatus: null
});

const getters = {

};

const mutations = {

  [ADD_USERS] (state, users) {
    state.users = users;
  },

};

const actions = {

  async fetchUsers({ commit }, config) {
    const users = await this.$api.users.fetch(config);
    commit(ADD_USERS, users);
    console.log({ message: "Users from vuex", users });
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};