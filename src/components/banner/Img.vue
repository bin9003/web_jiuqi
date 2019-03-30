<template>
  <div class="center-img">
    <img :src="banner.src" width="1157" height="351" :alt="banner.name">
  </div>
</template>

<script>
export default {
  name: 'imgBanner',
  props: {
    banner: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.center-img {
  margin: 0 auto;
  text-align: center;
}
</style>
