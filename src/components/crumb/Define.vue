<template>
  <div class="page4 position1">
    <span v-for="list in crumbData" :key="list.key"><a :href="list.src" v-html="list.name">首页</a> »</span> 正文
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class Detail extends Vue {
  @Prop(Array) readonly crumbData !: Object
}
</script>
