import axios from 'axios';

export default {
  /**
   * Fetch Pizzas from server
   *
   * @param {int} categoryId
   * @param {int} sort
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
};
