<template>
  <div class="paginator">
      <span style="vertical-align: middle;" v-if="pPagesNumber">
        <span v-if="pPagesNow == 1" :class="[pPagesNow == 1 ? pagedis : '']">&lt;</span>
        <span v-else><a href="javascript:;" @click="PagesData(pPagesNow - 1)">&lt;</a></span>
        <span v-for="page in pPagesNumber" :key="page.key" :class="[page == pPagesNow ? pageNowClass : '']">
          <span v-if="page == pPagesNow">{{page}}</span>
          <a v-else href="javascript:;" @click="PagesData(page)">{{page}}</a>
        </span>
        <span>
          <a href="javascript:;" @click="PagesData(pPagesNow + 1)" class="enable">&gt;</a>
        </span>
      </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Detail extends Vue {
  @Prop(String) readonly pagesNum !: Object
  @Prop(String) readonly pagesNow !: Object
  @Prop(String) readonly pagesSize !: Object

  data () {
    return {
      pContent: [], // list 列表数据
      pPagesNum: '', // 总页数
      pPagesNow: '', // 现在在哪一页
      pPagesSize: '', // 多少条数据
      pPagesNumber: [], // 页码
      pageNowClass: 'current',
      pagedis: 'disable',
      pageUpdate: '0'
    }
  }
  PagesData (index: any) {
    let _this = this
    axios.get('/data/solutionPageData.json', {
      params: {
        pageIndex: index
      }
    }).then(function (response) {
      // _this.$set(_this.$data, 'content', response.data.lists)
      // _this.$set(_this.$data, 'pagesNum', response.data.pagesNum)
      // _this.$set(_this.$data, 'pagesNow', response.data.pagesNow)
    }).catch(function (error) {
      console.log(error)
    })
  }
  @Watch('pagesNum')
  PagesNumData () {
    this.$set(this.$data, 'pPagesNum', this.pagesNum)
    this.$set(this.$data, 'pageUpdate', ++this.$data.pageUpdate)
  }
  @Watch('pagesNow')
  PagesNowData () {
    this.$set(this.$data, 'pPagesNow', this.pagesNow)
    this.$set(this.$data, 'pageUpdate', ++this.$data.pageUpdate)
  }
  @Watch('pagesSize')
  PagesSizeData () {
    this.$set(this.$data, 'pPagesSize', this.pagesSize)
  }
  @Watch('pageUpdate')
  PagesUpdateData () {
    this.$set(this.$data, 'pPagesNumber', [])
    let This = this
    for (let i = 1; i < This.$data.pPagesNum; i++) {
      This.$data.pPagesNumber.push(i)
    }
  }
}
</script>
