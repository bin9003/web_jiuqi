<template>
  <div>
    <div class="main3">
      <Carousel :carousel="solution.carousel"></Carousel>
      <div id="f6_1">
        <LeftSidebar :leftSide="solution.leftSide"></LeftSidebar>
        <ImgList :lists="solution.lists"></ImgList>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Carousel from '@/components/carousel/Define.vue'
import ImgList from '@/components/list/ImgList.vue'
import LeftSidebar from '@/components/sidebar/LeftSidebar.vue'
import axios from 'axios'

@Component({
  components: {
    Carousel,
    LeftSidebar,
    ImgList
  }
})
export default class Solution extends Vue {
  mounted () {
    let _this = this
    // 可以使用 vue-resource 加载跨域数据 也可以使用 webpack 配置进行跨域请求
    axios.get('/data/appData.json').then(function (response) {
      _this.$set(_this.$data, 'solution', response.data.solution)
    }).catch(function (error) {
      console.log(error)
    })
  }
  data () {
    return {
      solution: {}
    }
  }
}
</script>

<style>
@import url('../assets/css/jiuqi_product.css');
@import url('../assets/css/jiuqi.css');
@import url('../assets/css/style2.css');
</style>
