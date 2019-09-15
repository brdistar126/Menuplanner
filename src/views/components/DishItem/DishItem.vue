<template>
  <div class="dish-item" :class="{'edit-mode': editMode}">
    <div class="dish-content">
      <div class="dish-select">
        <div>
          <input
            class="dish-select-title"
            v-model="item.name"
            :readonly="!editMode"
            :class="{'edit-mode': editMode}"
          />
        </div>
        <vue-single-select
          class="vue-single-select"
          v-model="selectedDishType"
          :options="dishTypes"
        ></vue-single-select>
      </div>
      <font-awesome-icon v-if="editMode" class="dish-title-save" icon="save" @click="editMode = false"/>
    </div>
    <div class="dish-control">
      <font-awesome-icon icon="edit" @click="editMode = true"/>
      <font-awesome-icon icon="trash-alt" @click="onRemove"/>
      <font-awesome-icon icon="clipboard" @click="onDetails" />
      <font-awesome-icon class="drag-handle" icon="bars" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import VueSingleSelect from 'vue-single-select'
import { DISH_TYPES } from '../../../consts/consts'

export default {
  components: {
    VueSingleSelect
  },
  props: {
    item: {
      type: Object
    },
    mealTime: {
      type: Number
    },
    mealIndex: {
      type: Number
    },
    dishIndex: {
      type: Number
    }
  },
  data () {
    return {
      editMode: false,
      selectedDishType: this.item.type
    }
  },
  computed: {
    dishTypes () {
      return DISH_TYPES
    }
  },
  methods: {
    ...mapMutations({
      REMOVE_DISH: '$_meal/REMOVE_DISH',
      SET_DISH: '$_meal/SET_DISH'
    }),
    onDetails () {
      this.SET_DISH({
        mealTime: this.mealTime,
        mealIndex: this.mealIndex,
        dishIndex: this.dishIndex
      })
    },
    onRemove () {
      this.REMOVE_DISH({ mealTime: this.mealTime, mealIndex: this.mealIndex, dishIndex: this.dishIndex })
    }
  }
}
</script>

<style lang="scss" scoped>
  .dish-item {
    &.edit-mode {
      background-color: #edf4d5;
    }
    svg {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      cursor: pointer;
      path {
        fill: #555;
      }
    }
    margin-bottom: 10px;
    background-color: #E0E0E0;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dish-content {
      display: flex;
      .dish-select {
        display: flex;
        flex-direction: column;
        &-title {
          margin-bottom: 10px;
          background-color: #E0E0E0;
          font-size: 20px;
          font-weight: bold;
          outline-width: 0;
          border: none;
          &.edit-mode {
            background-color: #FFFFFF;
            outline-width: 1px;
            border: unset;
          }
        }
        ::v-deep .vue-single-select {
          .search-input {
            background: #AAA;
          }
        }
      }
    }
    .dish-title-save {
    }
    .dish-control {
      display: flex;
      .drag-handle {
        margin-left: 50px;
      }
    }
  }
</style>
