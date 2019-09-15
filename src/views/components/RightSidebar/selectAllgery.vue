<template>
  <div class="allgery-section">
    <label class="allgery-title">{{title}}</label>
    <div class="allgery-body">
      <div class="allgery-body-right">
        <select-item
          v-for="(allegryItem, allegryKey) in allegryItemsLeft"
          :label="allegryItem.label"
          :url="allegryItem.src"
          :id="allegryItem.label"
          :key="allegryKey"
        ></select-item>
      </div>
      <div class="allgery-body-left">
        <select-item
          v-for="(allegryItem, allegryKey) in allegryItemsRight"
          :label="allegryItem.label"
          :url="allegryItem.src"
          :id="allegryItem.label"
          :key="allegryKey"
        ></select-item>
      </div>
    </div>
  </div>
</template>

<script>

import selectItem from './elements/selectItem'

export default {
  components: {
    selectItem
  },
  props: {
    title: String
  },
  data () {
    return {
      allegryItemsLeft: [
        {
          label: 'Sesame',
          src: '/icons/oil.png'
        },
        {
          label: 'Gluten',
          src: '/icons/oil.png'
        },
        {
          label: 'Nuts',
          src: '/icons/oil.png'
        },
        {
          label: 'Crust',
          src: '/icons/oil.png'
        },
        {
          label: 'Eggs',
          src: '/icons/oil.png'
        },
        {
          label: 'Fish  ',
          src: '/icons/oil.png'
        },
        {
          label: 'Mustard',
          src: '/icons/oil.png'
        },
        {
          label: 'Milk',
          src: '/icons/oil.png'
        }
      ],
      allegryItemsRight: [
        {
          label: 'Peanuts',
          src: '/icons/oil.png'
        },
        {
          label: 'Soya',
          src: '/icons/oil.png'
        },
        {
          label: 'Shell',
          src: '/icons/oil.png'
        },
        {
          label: 'Lupin',
          src: '/icons/oil.png'
        },
        {
          label: 'Sulphite',
          src: '/icons/oil.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/sass/variables.scss';

  .allgery-section {
    width: 100%;
    height: 100%;
    background-color: $content-background;
    display: flex;
    flex-direction: column;
    .allgery-title {
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
    .allgery-body {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .allgery-body-left, .allgery-body-right {
        width: 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
    }
  }
</style>
