<template>
  <div class="home">
    <indexBanner :banner="home.banner" />
    <HomeContent :iSolution="home.iSolution" :iSupport="home.iSupport" :iCase="home.iCase"></HomeContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import indexBanner from '@/components/carousel/throughly.vue'
import HomeContent from '@/vModel/HomeContent.vue'
import axios from 'axios'

@Component({
  components: {
    indexBanner,
    HomeContent
  }
})
export default class Home extends Vue {
  mounted () {
    let _this = this
    axios.get('/data/appData.json').then(function (response) {
      _this.$set(_this.$data, 'home', response.data)
      // console.log(response, _this.$data)
    }).catch(function (error) {
      console.log(error)
    })
  }
  data () {
    return {
      home: {}
    }
  }
}
</script>

<style>
@import url(../assets/css/index_new.css);
@import url(../assets/css/style_2016.css);
</style>
