<template>
  <div class="wrapper">
    <div id="topcenter">
      <div id="top_group">
        <ul>
          <li><a :href="titCon.src" class="selected">{{ titCon.name }}</a></li>
          <li class="top_grouplinebg"></li>
          <li v-for="list in contentList" :key="list.key"><a :href="list.src">{{list.name}}</a> </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class New extends Vue {
  @Prop(Object) readonly subNav !: Object
  data () {
    return {
      titCon: {},
      contentList: []
    }
  }
  @Watch('subNav')
  chenges () {
    this.$set(this.$data, 'titCon', (this.subNav as any).all)
    this.$set(this.$data, 'contentList', (this.subNav as any).lists)
  }
}
</script>
