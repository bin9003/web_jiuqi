<template>
  <!--banner began-->
  <div id="wrapper">
    <div class="fullwidthbanner-container">
      <div class="fullwidthbanner">
        <ul>
          <li
            data-transition="3dcurtain-vertical"
            data-slotamount="15"
            data-masterspeed="300"
            data-link="/download/index.jhtml"
          >
            <img :src="bannerNow.src">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'throughly',
  props: ['CarouselData'],
  data () {
    return {
      bannerNow: {},
      count: '0'
    }
  },
  watch: {
    CarouselData: function () {
      this.$set(this.$data, 'bannerNow', this.CarouselData[0]) // 设置第一个banner 图片
      this.bannerCarousel()
    }
  },
  methods: {
    bannerCarousel () {
      let This = this
      let index = this.$data.count
      setInterval(function () {
        index++
        if (index >= This.CarouselData.length) {
          index = 0
        }
        This.$set(This.$data, 'count', index)
        This.$set(This.$data, 'bannerNow', This.CarouselData[index])
      }, 3000)
    }
  }
}
</script>

<style lang="scss">
.fullwidthbanner {
  img {
    width: 100%;
  }
}
</style>
