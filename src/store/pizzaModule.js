import pizzas from '@/api/pizzas';

export const pizzaModule = {
  state: () => ({
    pizzas: [],
    count: 0,
    status: 'loading',
  }),

  getters: {},

  mutations: {
    setPizzas(state, pizzas) {
      state.pizzas = pizzas;
    },

    setCount(state, count) {
      state.count = count;
    },

    setStatus(state, status) {
      state.status = status;
    },
  },

  actions: {
    async fetchPizzas({ state, commit }) {
      try {
        const data = await pizzas.fetchPizzas();
        console.log(data);
        commit('setPizzas', data.data.items);
        commit('setCount', data.data.count);
        commit('setStatus', 'success');
      } catch (e) {
        commit('setStatus', 'failed');
      }
    },
  },

  namespaced: true,
};
