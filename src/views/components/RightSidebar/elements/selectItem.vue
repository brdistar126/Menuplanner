<template>
  <div class="select-item">
    <img :src="url"/>
    <input type="checkbox" :id="id" name="cc" />
    <label :for="id"><span></span>{{label}}</label>
  </div>
</template>

<script>

export default {
  props: {
    label: String,
    url: String,
    id: String
  }
}
</script>

<style lang="scss" scoped>
  .select-item {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
      margin-left: 10px;
      width: 40px;
      height: 40px;
    }
    input{
      align-items: center;
    }
    input[type="checkbox"] {
      display:none;
    }

    input[type="checkbox"] + label {
      color:black;
      margin-left: 10px;
    }

    input[type="checkbox"] + label span {
      display:inline-block;
      width:19px;
      height:19px;
      margin:-2px 10px 0 0;
      vertical-align:middle;
      background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) left top no-repeat;
      cursor:pointer;
    }

    input[type="checkbox"]:checked + label span {
      background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) -19px top no-repeat;
    }
  }
</style>
