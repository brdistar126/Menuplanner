<template>
  <div class="ingredient-section">
    <label class="ingredient-title">{{title}}</label>
    <div class="ingredient-body">
      <draggable
        handle=".drag-ingredient"
        group="meal"
        v-bind="dragOptions"
      >
      <ingredient-item
        v-for="(ingredientItem, ingredientKey) in ingredientItems"
        :title="ingredientItem.title"
        :url="ingredientItem.src"
        :key="ingredientKey"
      ></ingredient-item>
      </draggable>
    </div>
    <div class="ingredient-up-bt">
      <button>ADD NEW IMAGE</button>
    </div>
  </div>
</template>

<script>

import ingredientItem from './elements/IngredientItem'
import draggable from 'vuedraggable'
export default {
  components: {
    ingredientItem,
    draggable
  },
  props: {
    title: String
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
    return {
      ingredientItems: [
        {
          title: 'OIL',
          src: './oil.jpg'
        },
        {
          title: 'Potatoes',
          src: './potatoes.jpg'
        }
      ]
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
      height: 60%;
    }
    .ingredient-up-bt{
      padding: 10px;
      margin-top: 25%;
    }
  }
</style>
