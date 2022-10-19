import filterModule from '@/store/filterModule.js';
import { createStore } from 'vuex';

export default createStore({
  modules: {
    filter: filterModule,
  },
});
