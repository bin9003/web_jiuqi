<template>
  <div id="bottom">
    <div class="bottom">
      <div class="center">
        <div class="bottomtop">
          <ul v-for="fList in dataFooter.fNav" :key="fList.key" style="margin-left:30px">
            <li>
              <a :href="fList.title.url">
                <span>
                  <strong>{{fList.title.name}}</strong>
                </span>
              </a>
            </li>
            <li v-for="NavList in fList.lists" :key="NavList.key">
              <a :href="NavList.url">{{NavList.name}}</a>
            </li>
          </ul>
          <div class="bottomtopnum" style="margin-left: 60px;">
            <div class="adres">
              <ul>
                <li v-for="infoList in dataFooter.info" :key="infoList.key" style="font-size:13px">
                  <strong>{{infoList.title}}</strong>&nbsp;&nbsp;&nbsp;{{infoList.content}}
                </li>
              </ul>
            </div>
            <div class="adres_img">
              <img
                :src="dataFooter.QRcode.src"
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
            <img src="../assets/images/gongan.png"> 京公网安备 11010802026335号
          </a>&nbsp;&nbsp;&nbsp;&nbsp;京ICP备11025610号
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Search from '@/components/from/search/FullSite.vue'
import Nav from '@/components/nav/Define.vue'
@Component({
  components: {
    Search,
    Nav
  }
})
export default class Header extends Vue {
  @Prop(Object) readonly dataFooter!: Object
}
</script>
