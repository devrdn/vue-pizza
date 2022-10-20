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
    setPizzas(state, pizza) {
      state.pizzas.push(pizza);
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
        state.price += findPizza.count * findPizza.price;
      } else {
        pizza.count = 1;
        state.price += pizza.count * pizza.price;
        commit('setPizzas', pizza);
      }
      state.count++;
    },
  },

  namespaced: true,
};
