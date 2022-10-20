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

<style lang="scss">
body {
  background-color: $background;
  font-family: 'Lato';
}

.wrapper {
  width: calc(100vw - 100px);
  @media (max-width: 650px) {
    width: calc(100vw - 50px);
  }
  @media (max-width: 400px) {
    width: 100vw;
    margin: 0px;
    border-radius: 0px;
  }
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;
}
</style>
