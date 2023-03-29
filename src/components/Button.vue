<script setup>
defineProps({
  onClick: {
    type: Function
  },
  type: {
    type: String
  },
  classes: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <button :type="type" :class="`btn ${classes}`" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  background: #2d9cdb;
  border-radius: 4px;
  border: 0;
  color: #fff;
  font-size: 13px;
  padding: 6px 25px;
  &__gray {
    background: #e2e8f0;
    color: #000;
  }
}
.mr-4 {
  margin-right: 16px;
}
</style>
