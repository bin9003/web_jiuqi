<template>
  <div class="layout">
    <Header v-if="dataHead" :dataHeads="dataHead"></Header>
    <transition name="slide-left">
      <router-view />
    </transition>
    <Footer :dataFoots="dataFoot"></Footer>
  </div>
</template>
<script>
import { Header, Footer } from './index.js'
import axios from 'axios'
export default {
  name: 'layout',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      dataHead: {},
      dataFoot: {}
    }
  },
  mounted () {
    let _this = this
    // 可以使用 vue-resource 加载跨域数据 也可以使用 webpack 配置进行跨域请求
    axios.get('/data/pubData.json').then(function (response) {
      _this.$set(_this.$data, 'dataHead', response.data.dataHeaders)
      _this.$set(_this.$data, 'dataFoot', response.data.dataFooters)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style>

</style>
