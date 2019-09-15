<template>
  <div class="ingredient-section">
    <label class="ingredient-title">{{name}}</label>
    <div class="ingredient-body">
      <draggable
        handle=".drag-ingredient"
        group="meal"
        v-bind="dragOptions"
      >
      <ingredient-item
        v-for="(ingredientItem, ingredientKey) in data"
        :item="ingredientItem"
        :index="ingredientKey"
        :key="ingredientKey"
        :set-item-value="setItemValue"
      ></ingredient-item>
      </draggable>
    </div>
    <div class="ingredient-up-bt" @click="onAddIngredient">
      <button>ADD NEW IMAGE</button>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
import ingredientItem from './elements/IngredientItem'
import draggable from 'vuedraggable'
export default {
  components: {
    ingredientItem,
    draggable
  },
  props: {
    name: String,
    data: Array,
    onSaveIngredient: Function
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    ...mapMutations({
      ADD_INGREDIENT: '$_meal/ADD_INGREDIENT'
    }),
    setItemValue (index, item) {
      const updatedData = this.data
      updatedData[index] = item
      this.onSaveIngredient(updatedData)
    },
    onAddIngredient () {
      this.ADD_INGREDIENT()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/sass/variables.scss';
  .ingredient-section {
    width: 100%;
    height: 100%;
    background-color: $content-background;
    display: flex;
    flex-direction: column;
    .ingredient-title{
      background-color: #b5d054;
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      padding-left: 10px;
      font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
      font-size: 20px;
      font-weight: 700;
    }
    .ingredient-body{
      width: 100%;
      overflow: auto;
    }
    .ingredient-up-bt{
      padding: 10px;
    }
  }
</style>
