import axios from "axios";

export default {
  fetchPizzas: async (cat_id, sort) => {
    const category = cat_id <= 0 ? '' : `category=${cat_id}`;
    const data = await axios.get(
      `https://62ceb481826a88972d01421d.mockapi.io/items?${category}`
    );
    return data;
  },
};
