<template>
  <div class="container container--cart">
    <!-- If cart empty -->
    <div v-if="pizzas.length === 0">
      <cart-empty />
    </div>

    <!-- If cart is not empty -->
    <div v-else class="cart">
      <div class="cart__top">
        <h2 class="content__title">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Корзина
        </h2>
        <div class="cart__clear">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 5H4.16667H17.5"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33337 9.16667V14.1667"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6666 9.16667V14.1667"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span @click="clearPizzas">Очистить корзину</span>
        </div>
      </div>
      <div class="content__items">
        <cart-item v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span>
            Всего пицц: <b>{{ count }} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{{ price }} ₽</b>
          </span>
        </div>
        <div class="cart__bottom-buttons">
          <router-link to="/" class="button button--outline button--add go-back-btn">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Вернуться назад</span>
          </router-link>
          <div class="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// import components
import CartItem from '@/components/CartItem.vue';
import CartEmpty from '@/components/CartEmpty.vue';

export default {
  components: {
    CartItem,
    CartEmpty,
  },
  methods: {
    ...mapActions({
      clearPizzas: 'cart/deleteAllPizzas',
    }),
  },
  computed: {
    ...mapGetters({
      pizzas: 'cart/getPizza',
      price: 'cart/getPrice',
      count: 'cart/getCount',
    }),
  },
};
</script>

<style lang="scss">
.cart {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content__items {
    display: block;
  }

  .content__title {
    display: flex;
    align-items: center;
    font-size: 32px;

    svg {
      position: relative;
      top: -2px;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      path {
        stroke: $black;
        stroke-width: 1.9;
      }
    }
  }

  &__clear {
    display: flex;
    align-items: center;
    cursor: pointer;
    @include noselect();

    span {
      display: inline-block;
      margin-left: 7px;
      color: #b6b6b6;
      font-size: 18px;
    }

    span,
    svg,
    path {
      transition: all $duration ease-in-out;
    }

    &:hover {
      svg {
        path {
          stroke: darken($color: #b6b6b6, $amount: 50);
        }
      }
      span {
        color: darken($color: #b6b6b6, $amount: 50);
      }
    }
  }

  &__item {
    display: flex;
    width: 100%;
    border-top: 1px solid $gray-line;
    padding-top: 30px;
    margin-top: 30px;

    &-img {
      display: flex;
      align-items: center;
      margin-right: 15px;
      width: 10%;

      img {
        width: 80px;
        height: 80px;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40%;

      h3 {
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.01em;
      }

      p {
        font-size: 18px;
        color: #8d8d8d;
      }
    }

    &-count {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 13%;

      &-minus {
        svg {
          path:first-of-type {
            display: none;
          }
        }
      }

      b {
        font-size: 22px;
      }
    }

    &-price {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33%;

      b {
        font-weight: bold;
        font-size: 22px;
        letter-spacing: 0.01em;
      }
    }

    &-remove {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 4%;

      .button {
        border-color: darken($color: $gray-line, $amount: 10);
      }

      svg {
        transform: rotate(45deg);

        path {
          fill: darken($color: $gray-line, $amount: 15);
        }
      }

      .button {
        svg {
          width: 11.5px;
          height: 11.5px;
          position: relative;
        }
        &:hover,
        &:active {
          border-color: darken($color: $gray-line, $amount: 80);
          background-color: darken($color: $gray-line, $amount: 80);
        }
      }
    }
  }

  &__bottom {
    margin: 50px 0;

    &-details {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 22px;

        &:last-of-type {
          b {
            color: $btn-clr;
          }
        }
      }
    }

    &-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      .go-back-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 210px;

        border-color: darken($color: $gray-line, $amount: 10);

        span {
          color: darken($color: $gray-line, $amount: 20);
          font-weight: 500;
          font-weight: 600;
        }

        &:hover {
          background-color: darken($color: $gray-line, $amount: 90);
          border-color: darken($color: $gray-line, $amount: 90);

          span {
            color: $gray-line;
          }
        }

        svg {
          margin-right: 12px;
          path {
            fill: transparent;
            stroke-width: 2;
          }
        }
      }

      .pay-btn {
        font-size: 16px;
        font-weight: 600;
        width: 210px;
        padding: 16px;
      }
    }
  }

  &--empty {
    margin: 80px auto;
    width: 560px;
    text-align: center;

    h2 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      line-height: 145.4%;
      letter-spacing: 0.01em;
      color: #777777;
    }

    icon {
      position: relative;
      top: 2px;
    }

    img {
      display: block;
      width: 300px;
      margin: 45px auto 60px;
    }

    .button--black {
      padding: 12px 0 14px;
      width: 230px;
      margin: 0 auto;
      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
