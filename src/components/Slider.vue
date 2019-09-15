<template>
  <div>
    <!-- Nav Links -->
    <div ref="slider" class="navMenu" :style="[menuDirection, menuWidth]">
      <a href="javascript:void(0)" class="closebtn" @click="closeMenu()"><font-awesome-icon icon="angle-left"></font-awesome-icon></a>
      <div v-for="(step, stepIndex) in steps" :key="step.id" @click="selectedStepIndex = stepIndex" class="leftWrapper">
        <div class="stepTitle">{{step.text}}</div>
        <div v-if="stepIndex === 0" class="weeksWrapper">
          <v-select class="vSelect" v-model="selected" :option="options" :placement="placement"></v-select>
          <div class="collapseWeeks">
          <div v-for="(week, weekIndex) in WEEKS" :key="weekIndex">
            <div @click="selectWeek(weekIndex)" class="week-day" :class="{'selectedWeek': weekIndex === time.weekDay}">{{ week }}</div>
            <div v-if="weekIndex === time.weekDay" class="weekItem">
              <div v-for="(link, linkIndex) in MEALS" :key="linkIndex" @click="onSelectedMealTime(linkIndex)" class="mealItem" :class="{'selected':linkIndex === time.mealTime}">
                {{ link }}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hamburger Menu -->
    <nav ref="menuIcon" class="navIcon" :style="iconDirection">
      <a href="javascript:void(0)" @click="toggleMenu()" data-test-ref="navMenuLink">
        <svg width="30" height="30">
          <path d="M0,5 30,5" :stroke="styles['menu-icon-color']" stroke-width="5"/>
          <path d="M0,14 30,14" :stroke="styles['menu-icon-color']" stroke-width="5"/>
          <path d="M0,23 30,23" :stroke="styles['menu-icon-color']" stroke-width="5"/>
        </svg>
      </a>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import styles from '@/assets/sass/variables.scss'
import vSelect from 'vselect-component'
import { MEALS, WEEKS } from '../consts/consts'

export default {
  name: 'slider',
  components: {
    vSelect
  },
  props: {
    width: {
      type: Number,
      required: false,
      default: 250
    },
    format: {
      type: String,
      required: false,
      default: 'overlay'
    },
    direction: {
      type: String,
      required: false,
      default: 'left'
    },
    opacity: {
      type: Number,
      required: false,
      default: 0
    },
    steps: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      styles: styles,
      menuWidth: {
        'width': 0
      },
      selectedMealTimeIndex: -1,
      index: 1,
      WEEKS,
      MEALS,
      selected: {
        value: 0,
        label: 'Week 1'
      },
      placement: 'down'
    }
  },
  computed: {
    ...mapGetters({
      time: '$_meal/time'
    }),
    options () {
      return Array(56).fill().map((value, index) => ({
        value: index,
        label: `Week ${index + 1}`
      }))
    },
    menuDirection () {
      return this.direction === 'right' ? { 'right': 0 } : { 'left': 0 }
    },
    iconDirection () {
      return this.direction === 'right' ? { 'float': 'right' } : { 'float': 'left' }
    },
    app () {
      return document.getElementById('app')
    }
  },
  methods: {
    ...mapMutations({
      SET_WEEKDAY: '$_meal/SET_WEEKDAY',
      SET_MEAL_TIME: '$_meal/SET_MEAL_TIME',
      SET_WEEK_INDEX: '$_meal/SET_WEEK_INDEX'
    }),
    onSelectedMealTime (linkIndex) {
      this.SET_MEAL_TIME(linkIndex)
    },
    selectWeek (weekIndex) {
      this.SET_WEEKDAY(weekIndex)
    },
    openMenu () {
      if (this.opacity) {
        // document.body.style.backgroundColor = utilities.hexToRGB(styles['background-color'], this.opacity)
      }
      this.setFormat()
    },
    setFormat () {
      const width = this.width.toString() + 'px'
      if (this.format === 'overlay') {
        this.menuWidth = { 'width': width }
      } else if (this.format === 'full') {
        this.menuWidth = { 'width': '100%' }
      } else {
        this.menuWidth = { 'width': width }
        if (this.app) {
          if (this.direction === 'right') {
            this.app.style.marginRight = width
            this.app.style.transition = 'margin-right .5s'
          } else {
            this.app.style.marginLeft = width
            this.app.style.transition = 'margin-left .5s'
          }
        } else {
          console.warn(`[Slider] The format was set to '${this.format}', but there is no element with an id 'app'. Add id='app' to the element to move.`)
        }
      }
    },
    closeMenu () {
      this.menuWidth = { 'width': 0 }
      if (this.app) {
        this.app.style.marginLeft = '0'
        this.app.style.marginRight = '0'
      }
      if (this.opacity) {
        document.body.style.backgroundColor = styles['background-color']
      }
    },
    toggleMenu () {
      if (this.menuWidth.width === 0) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    }
  },
  mounted () {
    this.selectedMealTimeIndex = this.time.mealTime
  },
  watch: {
    time (value) {
      this.selected = {
        value: value.weekIndex,
        label: `Week ${value.weekIndex + 1}`
      }
    },
    selected ({ value }) {
      this.SET_WEEK_INDEX(value)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/variables.scss';

  body {
    background-color: $background-color;
    transition: background-color .5s;
  }
  .navIcon{
    margin-top: 20px;
  }
  #app {
    transition: margin-left .5s;
    transition: margin-right .5s;
    padding: 20px;
  }
  .navMenu a{
    color: black !important;
  }
  .collapseWeeks>div{
    border-bottom: 1px solid #999999;
    padding: 2px;
  }.collapseWeeks{
    margin-bottom: 25px;
  }
  ::v-deep .vSelect {
    float: right;
    width: 100%;
    .dropMenu {
      background: #dbdbdb;
      border-radius: unset;
    }
    input, li{
      background: #dbdbdb;
      border-radius: unset;
      text-align: center;
      border: unset;
      padding: 8px 0;
    }
  }
  .weeksWrapper{
    padding-left: 60px;
    font-size: 21px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
  }
  .leftWrapper{
    font-size: 21px;
  }
  .weekItem{
    margin-left: 20px;
    &.selected {
      background-color: #edf4d5;
    }
  }
  .week-day {
    cursor: pointer;
  }
  .mealItem{
    margin-left: 20px;
    cursor: pointer;
    &.selected {
      background: #edf4d5;
    }
  }
  .selectedWeek {
    background: #edf4d5;
  }
  .stepTitle{
    padding-left: 30px;
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }
  .navMenu {
    margin-top: 50px;
    font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif";
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    background-color: $menu-background;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: $menu-text;
      display: block;
      transition: 0.3s;
      &:hover {
        color: $menu-text-hover;
      }
    }
    .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
      color: black;
      font-weight: 900;
    }
    .closebtn:hover {
      color: black;
    }
    v-select {
      float: right;
    }
  }
  @media screen and (max-height: 450px) {
    .navMenu {
      padding-top: 15px;
      a {
        font-size: 18px;
      }
    }
  }
</style>
