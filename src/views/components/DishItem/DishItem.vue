<template>
  <div class="dish-item">
    <div class="dish-select">
      <span class="dish-select-title">{{ item.name }}</span>
      <vue-single-select
        class="vue-single-select"
        v-model="selectedDishType"
        :options="dishTypes"
      ></vue-single-select>
    </div>
    <div class="dish-control">
      <font-awesome-icon icon="edit" />
      <font-awesome-icon icon="trash-alt" @click="onRemove"/>
      <font-awesome-icon icon="clipboard" />
      <font-awesome-icon class="drag-handle" icon="bars" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import vSelect from 'vselect-component'
import VueSingleSelect from 'vue-single-select'
import { DISH_TYPES } from '../../../consts/consts'

export default {
  components: {
    vSelect,
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
      REMOVE_DISH: '$_meal/REMOVE_DISH'
    }),
    onRemove () {
      this.REMOVE_DISH({ mealTime: this.mealTime, mealIndex: this.mealIndex, dishIndex: this.dishIndex })
    }
  }
}
</script>

<style lang="scss" scoped>
  .dish-item {
    margin-bottom: 10px;
    background-color: #E0E0E0;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dish-select {
      display: flex;
      flex-direction: column;
      &-title {
        font-size: 20px;
        font-weight: bold;
      }
      ::v-deep .vue-single-select {
        .search-input {
          background: #AAA;
        }
      }
    }
    .dish-control {
      display: flex;
      svg {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        cursor: pointer;
        path {
          fill: #555;
        }
      }
      .drag-handle {
        margin-left: 50px;
      }
    }
  }
</style>
