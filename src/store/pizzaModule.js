import pizzas from "@/api/pizzas";

export const pizzaModule = {
  state: () => ({
    pizzas: [],
    count: 0,
    status: "loading",
  }),

  getters: {
    getPizzas: (state) => state.pizzas,
    getCount: (state) => state.count,
    getStatus: (state) => state.status,
  },

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
    async fetchPizzas({ commit }, cat_id) {
      try {
        commit("setStatus", "loading");
        const data = await pizzas.fetchPizzas(cat_id);
        commit("setPizzas", data.data.items);
        commit("setCount", data.data.count);
        commit("setStatus", "success");
      } catch (e) {
        commit("setStatus", "failed");
      }
    },
  },

  namespaced: true,
};
