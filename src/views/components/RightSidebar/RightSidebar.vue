<template>
  <div class="right-sidebar-section">
    <div class="right-sidebar-content">
      <div v-if="selectedTabIndex === 0"
           class="right-sidebar-content-body1">
        <upload-photo :title="selectedDish.name"></upload-photo>
      </div>
      <div v-else-if="selectedTabIndex === 1"
           class="right-sidebar-content-body2">
        <ingredient :title="selectedDish.name"></ingredient>
      </div>
      <div v-if="selectedTabIndex === 2"
           class="right-sidebar-content-body3">
        <select-allegry :title="selectedDish.name"></select-allegry>
      </div>
    </div>
    <div class="right-sidebar-list">
      <ul>
        <li v-for="(tabList, tabIndex) in lists"
            :key="tabIndex"
            class="right-sidebar-item"
            @click="onSelectTab(tabIndex)"
            :class="{selected:selectedTabIndex === tabIndex}"
        >
          <label>{{tabList}}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import uploadPhoto from './UploadPhoto'
import ingredient from './Ingredient'
import selectAllegry from './selectAllgery'

export default {
  components: {
    uploadPhoto,
    ingredient,
    selectAllegry
  },
  data () {
    return {
      selectedTabIndex: -1,
      lists: [
        'COMPONENT PHOTOS',
        'INGREDIENTS',
        'ALLERGY INFO'
      ]
    }
  },
  methods: {
    onSelectTab (tabIndex) {
      if (Object.keys(this.selectedDish).length > 0) {
        this.selectedTabIndex = tabIndex
      }
    }
  },
  computed: {
    ...mapGetters({
      selectedDish: '$_meal/selectedDish'
    })
  },
  watch: {
    selectedDish (value) {
      if (Object.keys(value).length > 0) {
        this.selectedTabIndex = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .right-sidebar-section {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .right-sidebar-content {
      width: 100%;
      height: 100%;
      .right-sidebar-content-body1{
        width:100%;
        height: 100%;
        background: black;
      }
      .right-sidebar-content-body2{
        width:100%;
        height: 100%;
        background: blue;
      }
      .right-sidebar-content-body3{
        width:100%;
        height: 100%;
        background: green;
      }
    }
    .right-sidebar-list {
      width:10%;
      ul {
        list-style: none;
        background-color: #E0E0E0;
        padding: 0;
        margin: 0;
        width: fit-content;
        height: 100%;
        .right-sidebar-item {
          cursor: pointer;
          padding: 10px 3px;
          border-bottom: 1px solid white;
          label {
            cursor: pointer;
            user-select: none;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            font-size:12px;
            font-weight: 500;
            font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
            text-orientation: mixed;
          }
          &.selected {
            background-color: #9bb14d;
          }
        }
      }
    }
  }
</style>
