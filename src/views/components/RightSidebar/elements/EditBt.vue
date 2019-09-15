<template>
  <div
    class="right-sidebar-bt"
    :class="{inverse:revert}"
  >
    <input
      :class="{'edit-mode': isEditMode}"
      v-model="valueModel"
    />
    <font-awesome-icon
      :icon="isEditMode ? 'save' : 'edit'"
      @click="onSaveValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    url: String,
    revert: Boolean,
    onSave: Function,
    isTitle: Boolean
  },
  data () {
    return {
      isEditMode: false,
      valueModel: this.value,
      urlModel: this.url
    }
  },
  watch: {
    value (value) {
      this.valueModel = value
    },
    url (value) {
      this.urlModel = value
    }
  },
  methods: {
    onSaveValue () {
      if (this.isEditMode) {
        this.onSave(this.valueModel, this.isTitle)
      }
      this.isEditMode = !this.isEditMode
    }
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
      flex-direction: row-reverse;
    }
    img{
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
    input {
      box-sizing: border-box;
      width: 150px;
      border-width: 0;
      outline-width: 0;
      background-color: transparent;
      font-weight: 600;
      font-size: 18px;
      font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
      &.edit-mode {
        border-width: 1px;
        outline-width: 1px;
        background-color: white;
      }
    }
  }
</style>
