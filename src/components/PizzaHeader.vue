<template>
  <div class="header">
    <div class="container">
      <div class="header__logo">
        <img width="38" :src="logo" alt="Pizza logo" />
        <div>
          <h1>Vue Pizza</h1>
          <p>самая вкусная пицца во вселенной Vue</p>
        </div>
      </div>
      <div class="header__cart">
        <double-button rightInfo="0 $" leftInfo="1" />
      </div>
    </div>
  </div>
</template>

<script>
import pizzaLogo from '/logo.svg';
export default {
  data() {
    return {
      logo: pizzaLogo,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid $gray-line;
  padding: 40px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;

    img {
      margin-right: 15px;
    }

    h1 {
      color: #181818;
      font-size: 24px;
      letter-spacing: 1%;
      text-transform: uppercase;
      font-weight: 800;
    }

    p {
      color: #7b7b7b;
    }
  }
}
</style>
