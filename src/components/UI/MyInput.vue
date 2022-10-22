<template>
  <input type="text" @input="updateInput" :value="modelValue" class="input" />
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    modelValue: {
      type: String,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.6);
  padding: 12px 20px;
  width: 350px;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 42px;
  transition: all 0.15s ease-in-out;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1060px) {
    width: 200px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin-left: 10px;
  }

  @media (max-width: 645px) {
    margin-top: 10px;
  }
}
</style>
