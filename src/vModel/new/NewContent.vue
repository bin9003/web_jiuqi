<template>
  <div class="newContent">
    <ImgBanner></ImgBanner>
    <ListDefine></ListDefine>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ImgBanner from '@/components/banner/ImgBanner.vue'
import ListDefine from '@/components/list/Define.vue'

@Component({
  components: {
    ImgBanner,
    ListDefine
  }
})
export default class NewContent extends Vue {}
</script>
