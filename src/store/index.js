import filterModule from '@/store/filterModule.js';
import { createStore } from 'vuex';
import { pizzaModule } from '@/store/pizzaModule';

export default createStore({
  modules: {
    filter: filterModule,
    post: pizzaModule,
  },
});
