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
        <router-link to="/cart">
          <double-button :rightInfo="totalPrice" :leftInfo="totalCount" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import pizzaLogo from '/logo.svg';
export default {
  data() {
    return {
      logo: pizzaLogo,
    };
  },
  computed: {
    ...mapGetters({
      totalPrice: 'cart/getPrice',
      totalCount: 'cart/getCount',
    }),
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

    @media (max-width: 645px) {
      flex-direction: column;

      .header__name {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .header__cart {
        margin-top: 15px;
      }
    }
  }

  &__logo {
    display: flex;

    @media (max-width: 645px) {
      flex-direction: column;
      align-items: center;
    }

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
