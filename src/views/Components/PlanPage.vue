<template>
  <div class="plan-page">
    <time-select></time-select>
    <icon-button title="Add"></icon-button>
  </div>
</template>

<script>
import TimeSelect from './components/TimeSelect'
import IconButton from '../../shared/IconButton/IconButton'

export default {
  components: {
    TimeSelect,
    IconButton
  }
}
</script>

<style lang="scss" scoped>
  .time-select {
    width: 60vw;
  }
</style>
