<template>
  <div class="cart cart--empty">
    <h2>Корзина пустая <icon>😕</icon></h2>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.<br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src="/cart-empty.svg" alt="Empty cart" />
    <router-link to="/" class="button button--black">
      <span>Вернуться назад</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
