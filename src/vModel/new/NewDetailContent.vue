<template>
  <div id="conwrapper">
    <Crumb :crumbData="Detail.paths"></Crumb>
    <div class="page4 box">
      <Detail :detailMain="Detail.main"></Detail>
      <RightSidebar :sidebarData="Detail.sidebar"></RightSidebar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Crumb from '@/components/crumb/Define.vue'
import Detail from '@/components/detail/Detail.vue'
import RightSidebar from '@/components/sidebar/RightSidebar.vue'

@Component({
  components: {
    Crumb,
    Detail,
    RightSidebar
  }
})
export default class NewDetailContent extends Vue {
  @Prop(Object) readonly Detail !: Object
}
</script>
