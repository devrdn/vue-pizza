<template>
  <div>
    <div class="pizza-block">
      <img class="pizza-block__image" :src="pizza.imageUrl" alt="Pizza" />
      <h4 class="pizza-block__title">{{ pizza.title }}</h4>
      <div class="pizza-block__selector">
        <ul>
          <li
            v-for="(type, index) in pizza.types"
            :key="type"
            :class="{ active: types[index] === types[activeType] }"
            @click="setActiveType(type)"
          >
            {{ types[type] }}
          </li>
        </ul>
        <ul>
          <li
            v-for="(size, index) in pizza.sizes"
            :key="size"
            :class="{ active: size === activeSize }"
            @click="setActiveSize(size)"
          >
            {{ size }}
          </li>
        </ul>
      </div>
      <div class="pizza-block__bottom">
        <div class="pizza-block__price">от {{ pizza.price }} ₽</div>
        <my-button @click="onClickAdd" :value="getCountById(pizza.id)" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      types: ['тонкое', 'традиционное'],
      activeType: 0,
      activeSize: this.pizza.sizes[0],
    };
  },
  methods: {
    // Action Methods
    ...mapActions({
      addPizzaToCart: 'cart/addPizzaToCart',
    }),

    setActiveType(type) {
      this.activeType = type;
    },

    setActiveSize(size) {
      this.activeSize = size;
    },

    onClickAdd() {
      const pizzaItemToCard = {
        id: this.pizza.id,
        title: this.pizza.title,
        imageUrl: this.pizza.imageUrl,
        price: this.pizza.price,
        type: this.types[this.activeType],
        size: this.activeSize,
      };
      this.addPizzaToCart(pizzaItemToCard);
    },
  },
  computed: {
    ...mapGetters({
      getCountById: 'cart/getPizzaCountById',
    }),
  },
};
</script>

<style lang="scss" scoped>
.pizza-block {
  width: 280px;
  text-align: center;
  margin-bottom: 65px;

  &:not(:nth-of-type(4n)) {
    margin-right: 35px;
  }

  &__image {
    width: 260px;
  }

  &__title {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;
  }

  &__selector {
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
    flex-direction: column;
    padding: 6px;

    ul {
      display: flex;
      flex: 1;

      &:first-of-type {
        margin-bottom: 6px;
      }

      li {
        padding: 8px;
        flex: 1;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        @include noselect();
        &.active {
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
          border-radius: 5px;
          cursor: auto;
        }
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__price {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;
  }
}
</style>
