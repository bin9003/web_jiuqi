<template>
  <div>
    <SpreadHeader></SpreadHeader>
    <SpreadContent></SpreadContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Banner from '@/components/solution/spread/Banner.vue'
import Content from '@/components/spread/Content.vue'

@Component({
  components: {
    Banner,
    Content
  }
})
export default class SolutionSpread extends Vue {
}
</script>

<style>
@import url('../assets/css/jiuqi_digital.css');
</style>
