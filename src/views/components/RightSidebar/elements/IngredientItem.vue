<template>
  <div class="ingredient-item-section">
    <div class="edit-section">
      <div class="edit-title">
        <edit-bt :value="item.name" url="Here Image url" revert :on-save="onSaveItem"></edit-bt>
      </div>
      <div class="edit-bt">
        <font-awesome-icon icon="bars" class="drag-ingredient"/>
        <font-awesome-icon icon="trash-alt" @click="onRemove"/>
      </div>
    </div>
    <input v-model="item.url" type="text" style="height: 20px; width: 80px;">
    <input type="button" value="save" style="height: 20px;">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import editBt from './EditBt'

export default {
  components: { editBt },
  props: {
    item: Object,
    index: Number,
    setItemValue: Function
  },
  component: {
    editBt
  },
  data () {
    return {}
  },
  methods: {
    ...mapMutations({
      REMOVE_INGREDIENT: '$_meal/REMOVE_INGREDIENT'
    }),
    onSaveItem (value) {
      console.log(value)
      this.setItemValue(this.index, {
        name: value,
        url: this.item.url
      })
    },
    onRemove () {
      this.REMOVE_INGREDIENT(this.index)
    }
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
    border-bottom: 1px solid #edf4d5;
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
  }
</style>
