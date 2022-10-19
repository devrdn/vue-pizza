/**
 * Filter Module
 */
const filterModule = {
  state: () => ({
    categoryId: 0,
    sortType: {
      name: 'популярности',
      type: 'rating',
    },
  }),

  mutations: {
    setCategoryId(state, categoryId) {
      state.categoryId = categoryId;
    },
    setSortType(state, sortType) {
      state.sortType = sortType;
    },
  },
};

export default filterModule;