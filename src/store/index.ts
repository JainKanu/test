import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    users: (state) => state.users,
  },
  mutations: {
    update_users(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUsers(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          context.commit("update_users", res.data);
        })
        .catch((err) => {
          context.commit("update_error", err.response);
        });
    },
  },
});
