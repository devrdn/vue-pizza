<template>
  <div class="wrapper">
    <pizza-header />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PizzaHeader from '@/components/PizzaHeader.vue';
import PizzaHome from '@/pages/PizzaHome.vue';
export default {
  components: {
    PizzaHeader,
    PizzaHome,
  },
};
</script>

<style lang="scss" scoped></style>
