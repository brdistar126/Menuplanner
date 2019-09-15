<template>
  <div class="icon-button" @click="onClick" :class="{'small': small}">
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span class="icon-button-title">{{ name }}</span>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    name: {
      type: String
    },
    onClick: {
      type: Function
    },
    icon: {
      type: String
    },
    small: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-button {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    padding: 10px;
    background-color: #E0E0E0;
    width: fit-content;
    font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
    svg {
      margin-right: 10px;
    }
    &.small {
      font-size: 16px;
      margin: 20px 0 20px 25px;
      padding: 5px;
    }
  }
</style>
