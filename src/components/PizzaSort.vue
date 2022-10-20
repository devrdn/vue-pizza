<template>
  <div class="sort">
    <div class="sort__label">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
      <b>Сортировка по:</b>
      <span @click="setActivePopup">{{ sortType.name }}</span>
    </div>
    <div v-if="isActivePopup" class="sort__popup">
      <ul>
        <li
          v-for="sort in sortList"
          :class="{ active: sort.name === sortType.name }"
          @click="setSort(sort)"
        >
          {{ sort.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  data() {
    return {
      sortList: [
        { name: 'популярности', type: 'rating', order: 'asc' },
        { name: 'алфавит', type: 'title', order: 'asc' },
        { name: 'цена', type: 'price', order: 'asc' },
      ],
      isActivePopup: false,
    };
  },
  methods: {
    ...mapMutations({
      setSortType: 'filter/setSortType',
    }),
    setSort(sort) {
      this.setSortType(sort);
      this.setActivePopup();
    },
    setActivePopup() {
      this.isActivePopup = !this.isActivePopup;
    },
  },
  computed: {
    ...mapGetters({
      sortType: 'filter/getSortType',
    })
  },
};
</script>

<style lang="scss" scoped>
.sort {
  position: relative;
  &__label {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    b {
      margin-right: 8px;
    }

    span {
      color: $btn-clr;
      border-bottom: 1px dashed $btn-clr;
      cursor: pointer;
    }
  }

  &__popup {
    position: absolute;
    right: 0;
    margin-top: 15px;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0;
    width: 160px;

    ul {
      overflow: hidden;
      li {
        padding: 12px 20px;
        cursor: pointer;

        &.active,
        &:hover {
          background: lighten($btn-clr, 40%);
        }

        &.active {
          font-weight: bold;
          color: $btn-clr;
        }
      }
    }
  }
}
</style>
