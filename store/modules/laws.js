const state = () => ({
  laws: [],
});

const getters = {
  getLaws(state) {
    return state.laws;
  },
};

const mutations = {
  storeLaws(state, data) {
    state.laws = data;
  },
  clear(state) {
    state.laws = [];
  },
};

const actions = {
  async fetchLaws({ commit }) {
    const timestamp = `${Math.floor(new Date().getTime() / 1000)}${Math.floor(
      Math.random() * 10000000000
    )}`;
    const response = await fetch(
      `https://raw.githubusercontent.com/kaogeek/mfp-promise-tracker/main/data/laws.json?t=${timestamp}`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.log(error));

    commit('storeLaws', response);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
