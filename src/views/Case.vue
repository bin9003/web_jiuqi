<template>
  <div v-if="CaseData">
    <Category :subNav="CaseData.subNav"></Category>
    <List :verticalLists="CaseData.Lists"></List>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Category from '@/components/sidebar/Category.vue'
import List from '@/components/list/verticalList.vue'
import axios from 'axios'
@Component({
  components: {
    Category,
    List
  }
})
export default class New extends Vue {
  mounted () {
    let _this = this
    // 可以使用 vue-resource 加载跨域数据 也可以使用 webpack 配置进行跨域请求
    axios.get('/data/appData.json').then(function (response) {
      _this.$set(_this.$data, 'CaseData', response.data.CaseList)
    }).catch(function (error) {
      console.log(error)
    })
  }
  data () {
    return {
      CaseData: {}
    }
  }
}
</script>
<style>
  @import url(../assets/css/jiuqi.css);
  @import url(../assets/css/jiuqi_case.css);
</style>
