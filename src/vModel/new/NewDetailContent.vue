<template>
  <div id="conwrapper">
    <Crumb></Crumb>
    <div class="page4 box">
      <Detail></Detail>
      <RightSidebar></RightSidebar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
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
export default class NewDetailContent extends Vue {}
</script>
