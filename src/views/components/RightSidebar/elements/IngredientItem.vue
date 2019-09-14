<template>
  <div class="ingredient-item-section">
    <div class="edit-section">
      <div class="edit-title">
        <edit-bt :title="title" url="Here Image url" revert></edit-bt>
      </div>
      <div class="edit-bt">
        <font-awesome-icon icon="bars" />
        <font-awesome-icon icon="trash-alt"/>
      </div>
    </div>
    <input type="text" style="height: 20px;">
    <input type="button" value="save" style="height: 20px;">
  </div>
</template>

<script>
import editBt from './EditBt'

export default {
  components: { editBt },
  props: {
    title: String,
    url: String
  },
  component: {
    editBt
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .ingredient-item-section {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d1e294;
    .edit-section {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .edit-title {
        width: 100%;
        height: 10px;
      }
      .edit-bt {
        padding-left: 30px;
        width: fit-content;
        display: flex;
        justify-content: space-between;
        i {
          margin-left: 10px;
        }
        svg{
          padding: 4px;
        }
      }
      .ingredient-image {
        width: 40%;
        height: 100%;
      }
    }
    .ingredient-body {
      width: 100%;
      height: 60%;
    }
    .ingredient-up-bt {
      padding: 10px;
      margin-top: 25%;
    }
  }
</style>
