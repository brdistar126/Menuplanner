<template>
  <div class="meal-item">
    <div class="meal-item-header">
      <span class="meal-item-header-name">Meal {{ index + 1 }}</span>
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
        :meal-index="index"
        :dish-index="dishIndex"
        :dish-id="dish.id"
        :meal-id="mealIndex"
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
import { mapMutations, mapActions } from 'vuex'
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
      type: Object
    },
    mealIndex: {
      type: Number
    },
    mealTime: {
      type: Number
    },
    index: {
      type: Number
    },
    deleteMeal: {
      type: Function
    }
  },
  data () {
    return {
      mealModel: this.meal.model
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
      this.mealModel = newValue.model
    }
  },
  methods: {
    ...mapMutations({
      ADD_COMPONENT: '$_meal/ADD_COMPONENT'
    }),
    ...mapActions({
      DELETE_MEAL_MENU: '$_meal/DELETE_MEAL_MENU',
      POST_COMPONENT_DISH: '$_meal/POST_COMPONENT_DISH'
    }),
    onAddNewComponent () {
      const data = {
        data: {
          menuId: this.mealIndex,
          name: 'New Dish',
          type: 'Meat'
        },
        timeIndex: this.mealTime,
        mealIndex: this.index
      }
      this.POST_COMPONENT_DISH(data)
    },
    onRemoveMeal () {
      this.deleteMeal(this.mealTime, this.mealIndex)
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
