import axios from "axios";

export default {
  fetchPizzas: async (cat_id, sort) => {
    const data = axios.get(
      `https://62ceb481826a88972d01421d.mockapi.io/items?category=${cat_id}`
    );
    return data;
  },
};
