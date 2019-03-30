<template>
  <div id="conwrapper">
    <Crumb :crumbData="crumbDetail"></Crumb>
    <div class="page4 box">
      <Detail :detailMain="MainDetail"></Detail>
      <RightRecommended :sideData="sideDetail"></RightRecommended>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Crumb from '@/components/crumb/Normal.vue'
import Detail from '@/components/details/articles.vue'
import RightRecommended from '@/components/recommended/Normal.vue'
export default {
  name: 'NewDetail',
  data () {
    return {
      crumbDetail: '',
      MainDetail: '',
      sideDetail: ''
    }
  },
  components: {
    Crumb,
    Detail,
    RightRecommended
  },
  mounted () {
    let _this = this
    axios.get('/data/newDetailData.json').then(function (res) {
      _this.$set(_this.$data, 'crumbDetail', res.data.paths)
      _this.$set(_this.$data, 'MainDetail', res.data.main)
      _this.$set(_this.$data, 'sideDetail', res.data.sidebar)
    })
  }
}
</script>
