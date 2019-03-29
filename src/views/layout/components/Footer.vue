<template>
  <div id="bottom" v-if="FooterNav">
    <div class="bottom">
      <div class="center">
        <div class="bottomtop">
          <ul v-for="fList in FooterNav" :key="fList.key" style="margin-left:30px">
            <li>
              <router-link :to="fList.title.url">
                <span>
                  <strong>{{fList.title.name}}</strong>
                </span>
              </router-link>
            </li>
            <li v-for="NavList in fList.lists" :key="NavList.key">
              <router-link :to="NavList.url">{{NavList.name}}</router-link>
            </li>
          </ul>
          <div class="bottomtopnum" style="margin-left: 60px;">
            <div class="adres">
              <ul>
                <li v-for="infoList in FooterAddress" :key="infoList.key" style="font-size:13px">
                  <strong>{{infoList.title}}</strong>&nbsp;&nbsp;&nbsp;{{infoList.content}}
                </li>
              </ul>
            </div>
            <div class="adres_img">
              <img
                :src="FooterImg.src"
                width="134"
                height="134"
                alt
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bottomdiv">
        <div class="bottom_copyright">
         © 版权所有1997-2019北京久其软件股份有限公司&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026335"
            style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
          >
            <img src="@/assets/images/gongan.png"> 京公网安备 11010802026335号
          </a>&nbsp;&nbsp;&nbsp;&nbsp;京ICP备11025610号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      FooterNav: {},
      FooterImg: {},
      FooterAddress: {}
    }
  },
  props: {
    dataFoots: Object
  },
  watch: {
    dataFoots: function (newV, oldV) {
      this.$set(this.$data, 'FooterNav', this.dataFoots.fNav)
      this.$set(this.$data, 'FooterAddress', this.dataFoots.info)
      this.$set(this.$data, 'FooterImg', this.dataFoots.QRcode)
    }
  }
}
</script>

<style scoped>

</style>
