<template>
  <div id="f5">
    <div class="content-wrapper">
      <div class="content">
        <div class="homepage-wrapper">
          <div class="homepage-slider">
            <div id="aktuals_field" style="overflow:hidden; position:relative;width:1157px;">
              <table>
                <tbody>
                  <tr>
                    <td v-for="list in carousel" :key="list.key">
                      <div
                        class="homepage-slider-item"
                        :style="{ background: list.imgSrc }"
                      >
                        <a :href="list.src" class="title" target="_blank"></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- BEGIN .navigation -->
            <div class="navigation_1">
              <a
                v-for="(list, index) in carousel"
                :key="list.key"
                href="javascript:;"
                id="aktuals4_btn" :class="[index == count ? activeClass : '']"
                @click="changeImg(index)"
              ></a>
              <!-- END .navigation -->
            </div>
            <!-- END .homepage-slider -->
          </div>
        </div>
        <!-- END .content -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
const $ = require('jquery')
let clearinter: any
@Component
export default class Detail extends Vue {
  @Prop(Array) readonly carousel !: Object
  @Watch('carousel')
  onChanges () {
    this.ImgCarousel()
  }
  changeImg (index: any) {
    let This = this
    clearInterval(clearinter)
    $('#aktuals_field table').animate({
      marginLeft: -($('#aktuals_field').width()) * index
    }, 'slow', function () {
      This.$set(This.$data, 'count', index)
      This.ImgCarousel()
    })
  }
  ImgCarousel () {
    let This = this
    let leftCount = This.$data.count
    clearinter = setInterval(function () {
      leftCount++
      if (leftCount >= (This.carousel as any).length) {
        leftCount = 0
      }
      $('#aktuals_field table').animate({
        marginLeft: -($('#aktuals_field').width()) * leftCount
      }, 'slow')
      This.$set(This.$data, 'count', leftCount)
    }, 2000)
  }
  data () {
    return {
      count: '0',
      activeClass: 'active'
    }
  }
}
</script>
