<template>
  <div class="center-img">
    <img src="../../assets/images/news_banner.jpg" width="1157" height="351" alt>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ImgBanner extends Vue {}
</script>

<style lang="scss">
.center-img {
  margin: 0 auto;
  text-align: center;
}
</style>
