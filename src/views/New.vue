<template>
  <div class="new">
    <List :newList="newList"></List>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import List from '@/vModel/new/NewContent.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

@Component({
  components: {
    Header,
    List,
    Footer
  }
})
export default class New extends Vue {
  mounted () {
    let _this = this
    // 可以使用 vue-resource 加载跨域数据 也可以使用 webpack 配置进行跨域请求
    axios.get('/data/appData.json').then(function (response) {
      _this.$set(_this.$data, 'newList', response.data.newList)
    }).catch(function (error) {
      console.log(error)
    })
  }
  data () {
    return {
      newList: {}
    }
  }
}
</script>

<style>
@import url(../assets/css/jiuqi.css);
@import url(../assets/css/jiuqi_news.css);
</style>
