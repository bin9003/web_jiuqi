<template>
  <div>
    <Header></Header>
    <div id="mainbd">
      <div class="bd">
        <LeftSider></LeftSider>
        <BigDataContent></BigDataContent>
      </div>
      <div class="clear"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import LeftSider from '@/components/solution/bigData/LeftSider.vue'
import BigDataContent from '@/components/solution/bigData/BigDataContent.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Header,
    LeftSider,
    BigDataContent,
    Footer
  }
})
export default class Solution extends Vue {
}
</script>

<style>
@import url('../assets/css/jiuqi_bigdata.css');
@import url('../assets/css/jiuqi.css');
</style>
