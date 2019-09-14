<template>
  <div>
    <!-- Nav Links -->
    <div ref="slider" class="navMenu" :style="[menuDirection, menuWidth]">
      <a href="javascript:void(0)" class="closebtn" @click="closeMenu()">&times;</a>
      <div v-for="(step, stepIndex) in steps" :key="step.id" @click="selectedStepIndex = stepIndex" class="leftWrapper">
        <div class="stepTitle">{{step.text}}</div>
        <div v-if="stepIndex === 0" class="weeksWrapper">
          <v-select class="vSelect" v-model="selected" :option="options" :placement="placement"></v-select>
          <div v-for="(week, weekIndex) in weeks" :key="weekIndex">
            <span @click="selectWeek(weekIndex)" :class="{'selectedWeek': weekIndex === selectedWeekIndex}">{{ week }}</span>
            <div v-if="weekIndex === selectedWeekIndex" class="weekItem">
              <div v-for="(link, linkIndex) in meals" :key="linkIndex" @click="selectedLinkIndex = linkIndex" class="mealItem" :class="{'selected':linkIndex === selectedLinkIndex}">
                {{ link }}
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
import styles from '@/assets/sass/variables.scss'
import utilities from '@/js/utilities'
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
      selectedWeekIndex: -1,
      selectedLinkIndex: -1,
      index: 1,
      options: [{
        value: 1,
        label: 'Week 22'
      }, {
        value: 2,
        label: 'Week 23'
      }],
      selected: {
        value: 1,
        label: 'Week 22'
      },
      placement: 'down'
    }
  },
  computed: {
    menuDirection () {
      return this.direction === 'right' ? { 'right': 0 } : { 'left': 0 }
    },
    iconDirection () {
      return this.direction === 'right' ? { 'float': 'right' } : { 'float': 'left' }
    },
    app () {
      return document.getElementById('app')
    },
    meals () {
      return MEALS;
    },
    weeks () {
      return WEEKS;
    }
  },
  methods: {
    selectWeek (weekIndex) {
      if (this.selectedWeekIndex === weekIndex) {
        this.selectedWeekIndex = -1
      } else {
        this.selectedWeekIndex = weekIndex
      }
      this.selectedLinkIndex = -1
    },
    openMenu () {
      if (this.opacity) {
        document.body.style.backgroundColor = utilities.hexToRGB(styles['background-color'], this.opacity)
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
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/variables.scss';

  body {
    background-color: $background-color;
    transition: background-color .5s;
  }
  #app {
    transition: margin-left .5s;
    transition: margin-right .5s;
    padding: 20px;
  }
  .navMenu a{
    color: black !important;
  }
  ::v-deep .vSelect {
    float: right;
    width: 100%;
    .dropMenu {
      background: #dbdbdb;
      border:1px solid rgba(0, 0, 0, 0.5);
    }
    input, li{
      background: #dbdbdb;
      border: none;
      border-radius: unset;
      text-align: center;
      padding: 8px 0;
    }
  }
  .weeksWrapper{
    margin-left: 60px;
    font-size: 21px;
  }
  .leftWrapper{
    font-size: 21px;
  }
  .weekItem{
    margin-left: 20px;
    &.selected {
      background-color: #d1e294;
    }
  }
  .mealItem{
    margin-left: 20px;
    &.selected {
      background: #d1e294;
    }
  }
  .selectedWeek {
    background: #d1e294;
  }
  .stepTitle{
    padding-left: 30px;
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }
  .navMenu {
    font-family: $font-family-sans-serif;
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
