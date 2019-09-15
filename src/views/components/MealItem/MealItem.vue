<template>
  <div class="meal-item">
    <div class="meal-item-header">
      <span class="meal-item-header-name">Meal {{ mealIndex + 1 }}</span>
      <font-awesome-icon
        class="meal-item-header-remove"
        icon="trash-alt"
        @click="onRemoveMeal"
      ></font-awesome-icon>
    </div>
    <draggable
      v-model="mealModel"
      handle=".drag-handle"
      group="meal"
      v-bind="dragOptions"
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
    <icon-button
      small
      title="ADD NEW COMPONENT"
      icon="plus-square"
      class="meal-item-add-dish"
      :on-click="onAddNewComponent"
    ></icon-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import IconButton from '../../../shared/IconButton/IconButton'
import DishItem from '../DishItem/DishItem'
import draggable from 'vuedraggable'

export default {
  components: {
    DishItem,
    draggable,
    IconButton
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
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    meal (newValue) {
      this.mealModel = newValue
    }
  },
  methods: {
    ...mapMutations({
      ADD_COMPONENT: '$_meal/ADD_COMPONENT',
      REMOVE_MEAL: '$_meal/REMOVE_MEAL'
    }),
    onAddNewComponent () {
      this.ADD_COMPONENT({
        mealTime: this.mealTime,
        mealIndex: this.mealIndex
      })
    },
    onRemoveMeal () {
      this.REMOVE_MEAL({
        mealTime: this.mealTime,
        mealIndex: this.mealIndex
      })
    },
    onDishDragEnd () {
    }
  }
}
</script>

<style lang="scss" scoped>
  .meal-item {
    &-header {
      &-name {
        font-size: 30px;
        font-weight: bold;
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
      }
      &-remove {
        width: 25px;
        height: 25px;
        margin-left: 15px;
        cursor: pointer;
      }
    }
  }
</style>
