<template>
  <a href="/cart.html" class="button button--cart">
    <span>${{ rightInfo }}</span>
    <div class="button__delimiter"></div>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <span>{{ leftInfo }}</span>
  </a>
</template>

<script>
export default {
  name: 'DoubleButton',
  data() {
    return {};
  },
  props: {
    rightInfo: '',
    leftInfo: '',
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  background-color: $btn-clr;
  border-radius: 30px;
  padding: 10px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: background-color $duration ease-in-out, border-color $duration ease-in-out;
  border: 1px solid transparent;
  @include noselect();

  &,
  span {
    color: #fff;
  }

  i,
  span,
  path,
  svg {
    transition: all $duration ease-in-out;
  }

  &:hover {
    background-color: darken($btn-clr, 8%);
  }

  &:active {
    background-color: darken($btn-clr, 12%);
    transform: translateY(1px);
  }

  &--circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    min-width: 32px;
    padding: 0;
    border-width: 2px;
  }

  &--black {
    background-color: $black;

    &:hover,
    &:active {
      background-color: lighten($color: $black, $amount: 10);
    }
  }

  &--outline {
    background-color: #fff;
    border-color: $btn-clr;
    &,
    span {
      color: $btn-clr;
    }

    svg {
      path {
        fill: $btn-clr;
      }
    }

    &:hover {
      background-color: $btn-clr;

      &,
      span {
        color: #fff;
      }

      svg {
        path {
          fill: #fff;
        }
      }
    }

    &:active {
      background-color: darken($btn-clr, 8%);
    }
  }

  &__delimiter {
    width: 1px;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.25);
    margin-left: 14px;
    margin-right: 14px;
  }

  &--add {
    svg {
      margin-right: 2px;
    }

    span {
      font-weight: 600;
      font-size: 16px;
    }

    &:hover {
      i {
        background-color: #fff;
        color: $btn-clr;
      }
    }

    i {
      display: inline-block;
      border-radius: 30px;
      background-color: $btn-clr;
      color: #fff;
      font-weight: 600;
      width: 22px;
      height: 22px;
      font-style: normal;
      font-size: 13px;
      line-height: 22px;
      position: relative;
      top: -1px;
      left: 3px;
    }
  }

  &--cart {
    display: flex;
    align-items: center;
    line-height: 23px;
    padding: 12px 25px;

    svg {
      margin-right: 8px;
      margin-bottom: 1px;
    }

    span {
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
