/**
 * Filter Module
 *
 * Responsible for filtering: categories and sorting
 */
const filterModule = {
  state: () => ({
    categoryId: 0,
    sortType: {
      name: 'популярности',
      type: 'rating',
      orderBy: 'asc',
    },
    search: '',
  }),

  getters: {
    getCategoryId: (state) => state.categoryId,
    getSortType: (state) => state.sortType,
    getSearch: (state) => state.search,
  },

  mutations: {
    setCategoryId(state, categoryId) {
      state.categoryId = categoryId;
    },
    setSortType(state, sortType) {
      state.sortType = sortType;
    },
    setSearch(state, searchText) {
      state.search = searchText;
    },
  },

  actions: {
    setSearch({ commit }, search) {
      commit('setSearch', search);
    },
  },

  namespaced: true,
};

export default filterModule;
