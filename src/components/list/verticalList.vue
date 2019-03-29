<template>
  <div class="wrapper">
    <div id="centerdiv">
      <div
        style="float: left;"
        v-for="(list, index) in VcontentList"
        :key="list.key"
      >
        <div
          class="caseList">
          <div class="onecase">
            <ul>
              <li><a :href="list.src" title="中国神华" target="_blank"><img alt="" :src="list.imgSrc"></a></li>
              <li>&nbsp;</li>
              <li class="title"><a :href="list.src" target="_blank" v-html="list.title"></a> </li>
              <li class="txt">{{list.content}}</li>
            </ul>
          </div>
        </div>
        <div v-if="(index + 1) % 4" class="linebg"></div>
      </div>
    </div>
    <Paginator :pagesNum="VpagesNum" :pagesNow="VpagesNow" :pagesSize="VSize"></Paginator>
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Paginator from '@/components/paginator/define.vue'
@Component({
  components: {
    Paginator
  }
})
export default class varticalList extends Vue {
  @Prop(Object) readonly verticalLists !: Object
  data () {
    return {
      VcontentList: [],
      VpagesNum: '', // 总页数
      VpagesNow: '', // 现在在哪一页
      VSize: '' // 多少条数据
    }
  }
  @Watch('verticalLists')
  onchenges () {
    this.$set(this.$data, 'VcontentList', (this.verticalLists as any).rows)
    this.$set(this.$data, 'VpagesNum', (this.verticalLists as any).pagesNum)
    this.$set(this.$data, 'VpagesNow', (this.verticalLists as any).pagesNow)
    this.$set(this.$data, 'VSize', (this.verticalLists as any).Size)
  }
}
</script>
