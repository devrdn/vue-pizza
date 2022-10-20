<template>
  <div class="container">
    <div class="content__top">
      <pizza-category />
      <pizza-sort />
    </div>
    <h2 class="content__title">Все пиццы</h2>
    <div class="content__items">
      <div v-if="status === 'loading'">Пиццы загружаются, ожидайте :)</div>
      <pizza-block v-else v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
    </div>
  </div>
</template>

<script>
import PizzaCategory from '@/components/PizzaCategory.vue';
import PizzaSort from '@/components/PizzaSort.vue';
import PizzaBlock from '@/components/PizzaBlock.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    PizzaCategory,
    PizzaSort,
    PizzaBlock,
},
  methods: {
    ...mapActions({
      fetchPizzas: 'pizza/fetchPizzas',
    }),
  },
  mounted() {
    this.fetchPizzas({
      categoryId: this.categoryId,
      sort: this.sort,
    });
  },
  watch: {
    '$store.state.filter': {
      handler() {
        this.fetchPizzas({
          categoryId: this.categoryId,
          sort: this.sort,
        });
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      pizzas: 'pizza/getPizzas',
      status: 'pizza/getStatus',
      sort: 'filter/getSortType',
      categoryId: 'filter/getCategoryId',
    }),
  },
};
</script>

<style lang="scss">
.content {
  padding: 40px 0;

  &__title {
    margin: 35px 0;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 11px;
    justify-items: center;

    @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1060px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 730px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1260px) {
      .categories {
        overflow: auto;
        width: 100%;
        ul {
          width: 785px;
        }
      }
      .sort__label {
        margin-left: 20px;
      }
    }

    @media (max-width: 950px) {
      flex-direction: column;

      .sort__label {
        margin-left: 0px;
      }

      .categories {
        margin-bottom: 30px;
      }
    }
  }
}

.container {
  width: $container-width;
  margin: 0 auto;

  &--cart {
    max-width: 820px;
    margin: 90px auto;
    .content__title {
      margin: 0;
    }
  }
}
</style>
