<template>
  <div>
    <div class="main3">
      <Carousel></Carousel>
      <ListContent></ListContent>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Carousel from '@/components/carousel/Define.vue'
import ListContent from '@/vModel/solution/List.vue'

@Component({
  components: {
    Carousel,
    ListContent
  }
})
export default class Solution extends Vue {
}
</script>

<style>
@import url('../assets/css/jiuqi_product.css');
@import url('../assets/css/jiuqi.css');
@import url('../assets/css/style2.css');
</style>
