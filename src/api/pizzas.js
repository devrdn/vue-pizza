import axios from 'axios';

export default {
  fetchPizzas: async () => {
    const data = axios.get('https://62ceb481826a88972d01421d.mockapi.io/items');
    return data;
  },
};
