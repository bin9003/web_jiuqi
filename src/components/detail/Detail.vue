<template>
  <div class="w720 fl">
    <div class="rb_top">&nbsp;</div>
    <div v-if="detailMain" class="rb_mid box">
      <div class="w96">
        <h1>{{ detailMain.title }}</h1>
        <div class="msgbar">
          <!--发布时间： 2019-03-15 14:01:31 &nbsp; -->
        </div>
        <div class="content" v-html="detailMain.content"></div>
        <div class="pagebar"></div>
        <div class="other box">
          <ul>
            <li>
              <strong>上一篇：</strong>
              <a v-if="detailMain.prev.src" :href="detailMain.prev.src">{{detailMain.prev.name}}</a>
              <span v-else style="color:#666666">{{detailMain.prev.name}}</span>
            </li>
            <li>
              <strong>下一篇：</strong>
              <a v-if="detailMain.next.src" :href="detailMain.next.src">{{detailMain.next.name}}</a>
              <span v-else style="color:#666666">{{detailMain.next.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rb_low">&nbsp;</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Detail extends Vue {
  @Prop(Object) readonly detailMain !: Object
}
</script>
