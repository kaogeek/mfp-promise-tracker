import Vuex from 'vuex';
import Laws from './modules/laws';

const state = () => ({});

const store = () => {
  return new Vuex.Store({
    state,
    modules: {
      laws: Laws,
    },
  });
};

export default store;
