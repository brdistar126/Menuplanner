<template>
  <div
    class="right-sidebar-bt"
    :class="{inverse:revert}"
  >
    <label>{{title}}</label>
    <font-awesome-icon icon="edit" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
    revert: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .right-sidebar-bt{
    width: fit-content;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    svg {
      padding: 4px 10px;
    }
    &.inverse{
      flex-wrap: revert;
    }
    img{
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
    label{
      font-weight: 600;
      font-size: 18px;
      font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
    }
  }
</style>
