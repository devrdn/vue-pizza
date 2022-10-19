<template>
  <div class="categories">
    <ul>
      <!-- Т.к. массив категорий не будет дополнятся временно укажем key=index -->
      <li
        v-for="(category, index) in categories"
        :key="index"
        :class="{ active: categoryId === index }"
        @click="setCategoryId(index)"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
    };
  },
  methods: {
    ...mapMutations({
      setCategoryId: 'filter/setCategoryId',
    }),
  },
  computed: {
    ...mapState({ categoryId: (state) => state.filter.categoryId }),
  },
};
</script>

<style lang="scss" scoped>
.categories {
  ul {
    display: flex;

    li {
      background-color: #f9f9f9;
      padding: 13px 30px;
      border-radius: 30px;
      margin-right: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.1s ease-in-out;
      @include noselect();

      &:hover {
        background-color: darken(#f9f9f9, 2%);
      }

      &:active {
        background-color: darken(#f9f9f9, 5%);
      }

      &.active {
        background-color: #282828;
        color: #fff;
      }
    }
  }
}
</style>
