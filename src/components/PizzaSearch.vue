<template>
  <div class="root">
    <svg
      class="icon"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z"
      />
    </svg>
    <my-input
      placeholder="Поиск пиццы..."
      v-model="searchValue"
      ref="myinput"
      @input="handleSearchValue(searchValue)"
    />
    <svg
      @click="clearSearhValue"
      class="icon-clear"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"
      />
    </svg>
  </div>
</template>

<script>
import lodash from 'lodash';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    updateSearchValue(val) {
      this.setSearch(val);
    },

    handleSearchValue: lodash.debounce(function (val) {
      this.updateSearchValue(val);
    }, 500),

    clearSearhValue() {
      this.setSearch('');
      this.searchValue = '';
      this.myinput?.focus();
    },

    ...mapActions({
      setSearch: 'filter/setSearch',
    }),
  },
};
</script>

<style lang="scss" scoped>
.root {
  position: relative;
}

.icon {
  width: 22px;
  height: 22px;
  opacity: 0.3;
  position: absolute;
  left: 14px;
  top: 11.5px;

  @media (max-width: 768px) {
    left: 22px;
  }

  @media (max-width: 645px) {
    top: 20.5px;
  }
}

.icon-clear {
  position: absolute;
  width: 18px;
  height: 18px;
  opacity: 0.3;
  right: 15px;
  top: 13.5px;
  cursor: pointer;

  @media (max-width: 1060px) {
    right: 33.5px;
  }

  @media (max-width: 645px) {
    top: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
