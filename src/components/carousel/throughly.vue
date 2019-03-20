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
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Throughly extends Vue {
  @Prop(Array) readonly banner !: Object
  data () {
    return {
      bannerNow: {},
      count: '0'
    }
  }
  @Watch('banner')
  onChildChanged (val: string, oldVal: string) {
    // console.log(this.banner)
    this.$set(this.$data, 'bannerNow', this.banner[0]) // 设置第一个banner 图片
    this.bannerCarousel()
  }
  bannerCarousel () {
    let This = this
    let index = this.$data.count
    setInterval(function () {
      index++
      if (index >= This.banner.length) {
        index = 0
      }
      This.$set(This.$data, 'count', index)
      This.$set(This.$data, 'bannerNow', This.banner[index])
      console.log(index, This.$data.count)
    }, 3000)
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
