<template>
  <div class="center-img">
    <img :src="bannerData.src" width="1157" height="351" :alt="bannerData.name">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class ImgBanner extends Vue {
  @Prop(Object) readonly banner !: Object
  @Watch('banner')
  onChangeData (val: any, oldVal: any) {
    console.log(val, this.$data)
    this.$set(this.$data, 'bannerData', val)
  }
  data () {
    return {
      bannerData: {}
    }
  }
}
</script>

<style lang="scss">
.center-img {
  margin: 0 auto;
  text-align: center;
}
</style>
