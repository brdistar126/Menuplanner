<template>
  <div class="upload-photo-section">
    <label class="upload-image-title">{{name}}</label>
    <div v-if="showImage" class="upload-image-preview">
      <input type="text" v-model="image.url"/>
      <input type="button" value="save"/>
    </div>
    <div v-if="showImage" class="upload-image-title-bt">
      <edit-bt
        :value="image.name"
        url="Here Image url"
        :on-save="onSave"
        is-title
      ></edit-bt>
    </div>
    <div v-if="showImage" class="upload-image-description-bt">
      <edit-bt
        :value="image.description"
        url="Here Image url"
        :on-save="onSave"
      ></edit-bt>
    </div>
    <div class="upload-image-up-bt" @click="onCreate">
      <span><font-awesome-icon icon="plus-square" />ADD NEW IMAGE</span>
    </div>
  </div>
</template>

<script>
import editBt from './elements/EditBt'
import { mapActions } from 'vuex'
export default {
  components: { editBt },
  props: {
    name: String,
    image: Object,
    onSaveMain: Function,
    id: Number
  },
  data () {
    return {
      showImage: false,
      selectedTabIndex: 0,
      lists: [
        'COMPONENT PHOTOS',
        'INGREDIENTS',
        'ALLERGY INFO'
      ]
    }
  },
  watch: {
    image () {
      this.showImage = !!this.image && !!this.image.name
    }
  },
  mounted () {
    if (this.image && this.image.name) {
      this.showImage = true
    }
  },
  methods: {
    ...mapActions({
      POST_COMPONENT_PHOTO: '$_meal/POST_COMPONENT_PHOTO'
    }),
    onSave (value, isTitle) {
      console.log('onSAve', isTitle, value)
      this.onSaveMain({
        name: isTitle ? value : this.image.name,
        description: isTitle ? this.image.description : value,
        url: this.image.url
      })
    },

    onCreate () {
      this.showImage = true
      const data = {
        componentId: this.id,
        name: 'New Image Title',
        description: 'New Image Description',
        url: 'https://photo.com'
      }
      this.POST_COMPONENT_PHOTO(data)
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
