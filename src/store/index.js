import filterModule from '@/store/filterModule.js';
import { createStore } from 'vuex';
import { pizzaModule } from '@/store/pizzaModule';
import { cartModule } from '@/store/cartModule';

export default createStore({
  modules: {
    filter: filterModule,
    pizza: pizzaModule,
    cart: cartModule,
  },
});
