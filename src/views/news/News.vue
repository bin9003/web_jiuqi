<template>
  <div class="new">
    <imgBanner :banner="newBanner"></imgBanner>
    <newLists :dotLists="newList"></newLists>
  </div>
</template>

<script>
import axios from 'axios'
import imgBanner from '@/components/banner/Img.vue'
import newLists from '@/components/list/dot.vue'
export default {
  name: 'news',
  data () {
    return {
      newBanner: {},
      newList: []
    }
  },
  components: {
    imgBanner,
    newLists
  },
  mounted () {
    let _this = this
    axios.get('/data/newData.json').then(function (res) {
      _this.$set(_this.$data, 'newBanner', res.data.banner)
      _this.$set(_this.$data, 'newList', res.data.lists)
    })
  },
  watch: {
    newBanner: function () {

    }
  }
}

</script>

<style>
@import url(../../assets/css/jiuqi.css);
@import url(../../assets/css/jiuqi_news.css);
</style>
