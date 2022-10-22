import axios from 'axios';

export default {
  /**
   * Fetch Pizzas from server
   *
   * @param {int} categoryId
   * @param {int} sort
   * @param {string} searchText
   * @returns {array} pizzas
   */
  fetchPizzas: async (categoryId, sort, search) => {
    const category = categoryId <= 0 ? '' : `category=${categoryId}`;
    const searchText = search ? `search=${search}` : '';
    const data = await axios.get(
      `https://62ceb481826a88972d01421d.mockapi.io/items?${category}${searchText}`,
      {
        params: {
          sortBy: sort.type,
          orderBy: sort.orderBy,
        },
      },
    );
    return data;
  },

  /**
   * Fetch Pizza By Id
   *
   * @param {int} id
   * @returns {array} pizzas
   */
  fetchPizzasById: async (id) => {
    const data = await axios.get(`https://62ceb481826a88972d01421d.mockapi.io/items/${id}`);
    
    return data.data.items;
  },
};
