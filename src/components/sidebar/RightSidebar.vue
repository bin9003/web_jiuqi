<template>
  <div class="w250 fr mt5" v-if="sidebarData">
    <!--新闻中心_Begin-->
    <div class="case_left_news w98">&nbsp;</div>
    <div class="w98">
      <ul class="case_ul">
        <li
          v-for="(list, index) in sidebarData.lists"
          :key="list.key"
          :class="[(index < (sidebarData.lists.length - 1)) ? caseBottom : '', sidebarStyle]"
        >
          <a
            title="list.name"
            target="_blank"
            href="list.src"
            v-html="list.name"
          ></a>
        </li>
      </ul>
    </div>
    <!--新闻中心_End-->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Detail extends Vue {
  @Prop(Object) readonly sidebarData !: Object
  data () {
    return {
      caseBottom: 'case_li_bottom',
      sidebarStyle: 'case_ul_li'
    }
  }
}
</script>
