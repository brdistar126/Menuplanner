<template>
  <div class="icon-button" @click="onClick">
    <span class="icon-button-title">{{ title }}</span>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    title: {
      type: String
    },
    onClick: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-button {
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    padding: 5px 8px;
    background-color: #E0E0E0;
    width: fit-content;
  }
</style>
