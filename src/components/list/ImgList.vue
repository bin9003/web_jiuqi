<template>
  <div class="proright" v-if="content">
    <div v-for="list in content" :key="list.key">
      <div class="caseList">
        <ul>
          <li>
            <a
              :href="list.src"
              :title="list.title"
              target="_blank"
            >
              <img alt :src="list.imgSrc">
            </a>
            <div class="title">
              <a href="list.src" target="_blank" v-html="list.title"></a>
            </div>
            <div
              class="procontent"
              v-html="list.content"
            ></div>
          </li>
        </ul>
      </div>
      <div class="linebg"></div>
    </div>
    <div class="paginator">
      <span style="vertical-align: middle;" v-if="pagesNumber">
        <span v-if="pagesNow == 1" :class="[pagesNow == 1 ? pagedis : '']">&lt;</span>
        <span v-else><a href="javascript:;" @click="PagesData(pagesNow - 1)">&lt;</a></span>
        <span v-for="page in pagesNumber" :key="page.key" :class="[page == pagesNow ? pageNowClass : '']">
          <span v-if="page == pagesNow">{{page}}</span>
          <a v-else href="javascript:;" @click="PagesData(page)">{{page}}</a>
        </span>
        <span>
          <a href="javascript:;" @click="PagesData(pagesNow + 1)" class="enable">&gt;</a>
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Detail extends Vue {
  @Prop(Object) readonly lists !: Object
  data () {
    return {
      pContent: [], // list 列表数据
      pPagesNum: '', // 总页数
      pPagesNow: '', // 现在在哪一页
      pPagesNumber: [], // 页码
      pPageNowClass: 'current',
      pPagedis: 'disable'
    }
  }
  @Watch('lists')
  onChange (val: any) {
    this.$set(this.$data, 'pContent', (this.lists as any).list)
    this.$set(this.$data, 'pPagesNum', (this.lists as any).pagesNum)
    this.$set(this.$data, 'pPagesNow', (this.lists as any).pagesNow)
  }
  @Watch('content')
  onChangeData (val: any) {
    this.$set(this.$data, 'pagesNumber', [])
    let This = this
    for (let i = 1; i <= This.$data.pagesNum; i++) {
      This.$data.pagesNumber.push(i)
    }
    console.log(this.$data.content)
  }
  PagesData (index: any) {
    let _this = this
    axios.get('/data/solutionPageData.json', {
      params: {
        pageIndex: index
      }
    }).then(function (response) {
      _this.$set(_this.$data, 'content', response.data.lists)
      _this.$set(_this.$data, 'pagesNum', response.data.pagesNum)
      _this.$set(_this.$data, 'pagesNow', response.data.pagesNow)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style>
  .current {
    margin-right: 2px;
  }
</style>
