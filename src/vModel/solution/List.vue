<template>
  <div id="f6_1">
    <LeftSidebar></LeftSidebar>
    <ImgList></ImgList>
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ImgList from '@/components/list/ImgList.vue'
import LeftSidebar from '@/components/sidebar/LeftSidebar.vue'

@Component({
  components: {
    LeftSidebar,
    ImgList
  }
})
export default class SolutionListContent extends Vue {
}
</script>

<style>
#f6_1 {
  overflow: hidden;
}
</style>
