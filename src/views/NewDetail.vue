<template>
  <div class="main">
    <NewDetailContent :Detail="newDetail"></NewDetailContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import NewDetailContent from '@/vModel/new/NewDetailContent.vue'
import axios from 'axios'

@Component({
  components: {
    NewDetailContent
  }
})
export default class NewDetail extends Vue {
  mounted () {
    let _this = this
    // 可以使用 vue-resource 加载跨域数据 也可以使用 webpack 配置进行跨域请求
    axios.get('/data/appData.json').then(function (response) {
      _this.$set(_this.$data, 'newDetail', response.data.newDetail)
    }).catch(function (error) {
      console.log(error)
    })
  }
  data () {
    return {
      newDetail: {}
    }
  }
}
</script>

<style>
@import url(../assets/css/jiuqi.css);
@import url(../assets/css/jiuqi_case.css);
</style>
