<template>
  <div class="news_list">
    <ul>
      <li v-for="list in listData" :key="list.key">
        <a
          :href="list.url"
          :title="list.content"
          target="_blank"
          v-html="list.content"
        ></a>
        <!--<span style="color:#b8b8b8">（2019-03-15）</span>-->
      </li>
    </ul>
    <div class="paginator"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ListDefine extends Vue {
  @Prop(Array) readonly listData !: Object
}
</script>
