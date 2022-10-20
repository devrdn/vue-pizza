<template>
  <button class="button button--outline button--add">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span>Добавить</span>
    <i v-if="value !== 0">{{ value }}</i>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    value: {
      type: Number,
      required: true,
    },
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
}
</style>
