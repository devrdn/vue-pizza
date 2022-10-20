/**
 * Cart Module
 *
 * Responsible for the state of the cart
 */
export const cartModule = {
  state: () => ({
    pizzas: [],
    price: 0,
    count: 0,
  }),

  getters: {
    /**
     * @param {Object} state
     * @returns count of pizza by id
     */
    getPizzaCountById: (state) => (id) => {
      return state.pizzas.reduce((acc, pizza) => (pizza.id === id ? acc + pizza.count : acc), 0);
    },

    /**
     * @param {Object} state
     * @returns all pizzas
     */
    getPizza: (state) => {
      return state.pizzas;
    },

    /**
     * @param {Object} state
     * @returns total price
     */
    getPrice: (state) => state.price,

    /**
     * @param {Object} state
     * @returns total count
     */
    getCount: (state) => state.count,
  },

  mutations: {
    setPizzas(state, payload) {
      state.pizzas.push(payload);
    },

    addPrice(state, payload) {
      state.price += payload;
    },

    addCount(state, payload) {
      state.count += payload;
    },

    clearPizzas(state) {
      state.pizzas.length = 0;
      state.price = state.count = 0;
    },

    removePizza(state, payload) {
      state.pizzas = state.pizzas.filter(
        (pizza) =>
          pizza.id !== payload.id || pizza.type !== payload.type || pizza.size !== payload.size,
      );
    },
  },

  actions: {
    /**
     * Add Pizza to Cart
     * @param {Object} param state and commit
     * @param {Object} pizza new pizza object
     */
    addPizzaToCart({ state, commit }, pizza) {
      const findPizza = state.pizzas.find(
        (item) => pizza.id === item.id && pizza.size === item.size && pizza.type === item.type,
      );
      if (findPizza) {
        findPizza.count++;
        commit('addPrice', findPizza.price);
      } else {
        pizza.count = 1;
        commit('addPrice', pizza.count * pizza.price);
        commit('setPizzas', pizza);
      }
      commit('addCount', 1);
    },

    /**
     * Removing lll pizzas from cart
     * @param {Object} param state and commit
     */
    deleteAllPizzas({ state, commit }) {
      if (state.pizzas.length !== 0) {
        commit('clearPizzas');
      }
    },

    /**
     * Removing certain pizza from cart
     * @param {Object} param1 state and commit
     * @param {Object} param2 pizza params
     */
    removePizza({ state, commit }, { id, type, size, price, count }) {
      if (state.pizzas.length !== 0) {
        const params = {
          id,
          type,
          size,
          price,
          count,
        };
        commit('removePizza', params);
        commit('addPrice', -(params.price * params.count));
        commit('addCount', -params.count);
      }
    },

    minusPizza({ state, commit }, pizza) {
      const findPizza = state.pizzas.find(
        (item) => pizza.id === item.id && pizza.size === item.size && pizza.type === item.type,
      );
      if (findPizza.count === 1) {
        commit('removePizza', findPizza);
      } else if (findPizza.count > 1) {
        findPizza.count -= 1;
      }
      commit('addCount', -1);
      commit('addPrice', -findPizza.price);
    },
  },

  namespaced: true,
};
