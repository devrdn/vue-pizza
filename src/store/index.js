import filterModule from '@/store/filterModule.js';

const { createStore } = require('vuex');

export default createStore({
  modules: {
    filter: filterModule,
  },
});
