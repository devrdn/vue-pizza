<template>
  <div v-if="status === 'loading'" class="container">
    <p>Загрузка пиццы ...</p>
  </div>
  <div v-else-if="status === 'success'" class="container">
    <img :src="pizza.imageUrl" :alt="pizza.title" />
    <h2>{{ pizza.title }}</h2>
    <h4>{{ pizza.price }}</h4>
  </div>
  <div v-else class="container">Пицца не найдена</div>
</template>

<script>
import api from '@/api/pizzas.js';
export default {
  data() {
    return {
      pizza: {},
      status: 'loading',
    };
  },
  watch: {
    $route: 'fetchPizzasById',
  },
  methods: {
    async fetchPizzasById(id) {
      try {
        this.pizza = await api.fetchPizzasById(id);
        this.status = 'success';
      } catch (e) {
        this.status = 'error';
      }
    },
  },
  mounted() {
    this.fetchPizzasById(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>
