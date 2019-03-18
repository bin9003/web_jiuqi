<template>
  <div class="new">
    <List></List>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import List from '@/vModel/new/NewContent.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Header,
    List,
    Footer
  }
})
export default class New extends Vue {
}
</script>

<style>
@import url(../assets/css/jiuqi.css);
@import url(../assets/css/jiuqi_news.css);
</style>
