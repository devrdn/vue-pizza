/**
 * Filter Module
 */
const filterModule = {
  state: () => ({
    categoryId: 0,
    sortType: {
      name: "популярности",
      type: "rating",
      orderBy: "asc",
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

  namespaced: true,
};

export default filterModule;
