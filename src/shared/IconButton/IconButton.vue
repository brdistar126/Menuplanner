<template>
  <div class="icon-button">
    <add-icon />
    <span class="icon-button-title">{{ title }}</span>
  </div>
</template>

<script>
import AddIcon from './add_icon.svg'

export default {
  components: {
    'add-icon': AddIcon
  },
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-button {
    padding: 5px 8px;
    background-color: #E0E0E0;
    width: fit-content;
  }
</style>
