<template>
  <div class="upload-photo-section">
    <label class="upload-image-title">{{title}}</label>
    <div class="upload-image-preview">
      <input type="text"/>
      <input type="button" value="save"/>
    </div>
    <div class="upload-image-title-bt">
      <edit-bt title="Image Title" url="Here Image url" ></edit-bt>
    </div>
    <div class="upload-image-description-bt">
      <edit-bt title="Image Description" url="Here Image url" ></edit-bt>
    </div>
    <div class="upload-image-up-bt">
      <span><font-awesome-icon icon="plus-square" />ADD NEW IMAGE</span>
    </div>
  </div>
</template>

<script>
import editBt from './elements/EditBt'

export default {
  components: { editBt },
  props: {
    title: String
  },
  data () {
    return {
      selectedTabIndex: 0,
      lists: [
        'COMPONENT PHOTOS',
        'INGREDIENTS',
        'ALLERGY INFO'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/sass/variables.scss';
  .upload-photo-section {
    width: 100%;
    height: 100%;
    background-color: $content-background;
    display: flex;
    flex-direction: column;
    .upload-image-title{
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
    .upload-image-preview{
      width: 100%;
      height: 40%;
      padding:10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .upload-image-title-bt,.upload-image-description-bt{
      margin-top: 2%;
    }
    .upload-image-up-bt{
      padding: 10px;
      margin-top: 25%;
      span{
        font-size: 13px;
        padding: 6px;
        background:#aaa;
        svg{
          padding-right: 8px;
        }
      }
    }
  }
</style>
