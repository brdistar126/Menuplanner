<template>
  <div class="meal-item">
    <span class="meal-item-name">Meal {{ mealIndex + 1 }}</span>
    <font-awesome-icon class="meal-item-remove" icon="trash-alt"></font-awesome-icon>
    <draggable
      v-model="mealModel"
      handle=".drag-handle"
      group="meal"
      @end="onDishDragEnd"
    >
      <dish-item
        v-for="(dish, dishIndex) in mealModel"
        :key="dishIndex"
        :item="dish"
        :meal-time="mealTime"
        :meal-index="mealIndex"
        :dish-index="dishIndex"
      ></dish-item>
    </draggable>
  </div>
</template>

<script>
import DishItem from '../DishItem/DishItem'
import draggable from 'vuedraggable'

export default {
  components: {
    DishItem,
    draggable
  },
  props: {
    meal: {
      type: Array
    },
    mealIndex: {
      type: Number
    },
    mealTime: {
      type: Number
    }
  },
  data () {
    return {
      mealModel: this.meal
    }
  },
  computed: {
  },
  watch: {
    meal (newValue) {
      this.mealModel = newValue
    }
  },
  methods: {
    onDishDragEnd () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .meal-item {
    &-name {
      font-size: 30px;
      font-weight: bold;
    }
    &-remove {
      width: 25px;
      height: 25px;
      margin-left: 15px;
    }
  }
</style>
