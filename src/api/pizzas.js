import axios from 'axios';

export default {
  fetchPizzas: async (categoryId, sort) => {
    const category = categoryId <= 0 ? '' : `category=${categoryId}`;
    const data = await axios.get(`https://62ceb481826a88972d01421d.mockapi.io/items?${category}`, {
      params: {
        sortBy: sort.type,
        orderBy: sort.orderBy,
      },
    });
    return data;
  },
};
