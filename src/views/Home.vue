<template>
<div class="home">
  <!-- banner 位置 -->
  <CarouselThroughly :CarouselData="banner"></CarouselThroughly>
  <div id="index_content">
    <!--解决方案-->
    <div id="solution">
      <div class="index_title">
        <a href="/solutions/index.jhtml">
          解决方案&nbsp;&nbsp;
          <span style="font-size:12px; color:#979796;">/&nbsp;SOLUTION</span>
        </a>
      </div>
      <div v-for="stList in iSolution" :key="stList.key" class="sol_info">
        <div class="sol_img">
          <a href="/zfgl/2865.jhtml" target="_blank">
            <img :src="stList.src" :alt="stList.sname">
          </a>
        </div>
      </div>
    </div>
    <!--解决方案end-->
    <!--服务支持-->
    <div id="support">
      <div class="support">
        <!--<div class="index_title"><a href="/service/index.jhtml">服务支持&nbsp;&nbsp;<span style="font-size:12px; color:#979796;">/&nbsp;SUPPORT</span></a></div>-->
        <div v-for="sptList in iSupport" :key="sptList.key" class="sup_info">
          <div class="sup_img">
            <a :href="sptList.url">
              <img :src="sptList.src" :alt="sptList.sname">
            </a>
          </div>
          <div class="sup_title">
            <a :href="sptList.url">产品注册</a>
          </div>
          <div class="sup_dis" v-html="sptList.content"></div>
        </div>
      </div>
    </div>
    <!--服务支持end-->
    <div id="case">
      <div class="index_title">
        <a href="/case/index.jhtml">
          经典案例&nbsp;&nbsp;
          <span style="font-size:12px; color:#979796;">/&nbsp;CASE</span>
        </a>
      </div>
      <div class="case_dis">
        <div class="case_dis_1">
          <div class="case_dis_title">
            <a href="/zf/index.jhtml">政府部门</a>
          </div>
          <div
            class="case_dis_info_black"
          >久其软件已与国家发改委、教育部、工信部、民政部、财政部、交通运输部、水利部、农业部、国务院国资委、国家统计局等近60个国家政府部门和80余家家中央企业集团建立了长期合作关系。</div>
        </div>
        <div class="case_dis_2">
          <img src="../assets/images/homeCase/case2.jpg" width="317" height="247" alt>
        </div>
        <div class="case_dis_3">
          <div class="case_dis_title">
            <a href="/jz/index.jhtml">建筑地产</a>
          </div>
          <div
            class="case_dis_info_white"
          >久其软件在建筑施工领域具备专业优势和影响力，先后与中国铁建、中国中铁、中国建筑、中国交建、中国中冶、中国电建、中国能建、中国化学等数十家大型中央或地方集团型企业建立了深入合作关系。</div>
        </div>
        <div class="case_dis_4">
          <div class="case_dis_title">
            <a href="/tx/index.jhtml">通信行业</a>
          </div>
          <div
            class="case_dis_info_white"
          >久其软件为中国电信、中国移动和中国联通等多家单位提供了包括综合数据整合分析、关联合并业务、ABC作业成本管理、全面预算管理、税务风险管理以及数据质量管理等系统解决方案。</div>
        </div>
        <div class="case_dis_5">
          <div class="case_dis_title">
            <a href="/jtys/index.jhtml">交通运输</a>
          </div>
          <div class="case_dis_info_white">目前，久其为交通运输行业的客户实施了包括财务报表、经营统计、监管报送、企业大数据应用等内容的项目建设。</div>
        </div>
        <div class="case_dis_6">
          <img src="../assets/images/homeCase/case6.jpg" width="317" height="247" alt>
        </div>
        <div class="case_dis_7">
          <img src="../assets/images/homeCase/case7.jpg" width="317" height="247" alt>
        </div>
        <div class="case_dis_8">
          <div class="case_dis_title">
            <a href="/nydl/index.jhtml">能源电力</a>
          </div>
          <div
            class="case_dis_info_white"
          >久其软件为能源电力行业提供成熟的企业管控解决方案，承担了神华集团、华能集团、大唐集团、中国国电、三峡集团、国电投等信息化系统项目的建设工作，为企业集团管控战略落地提供了有力支撑。</div>
        </div>
        <div class="case_dis_9">
          <div class="case_dis_title">
            <a href="/ly/index.jhtml">旅游商贸</a>
          </div>
          <div
            class="case_dis_info_black"
          >久其软件凭借对旅游商贸行业的深刻了解，提供有针对性的解决方案，如财务报表优化改造项目、共享中心费用报销系统、酒店信息化管控系统等，单位覆盖中钢集团、中生集团、万达商业地产、首旅集团等。</div>
        </div>
        <div class="case_dis_10">
          <div class="case_dis_title">金融行业</div>
          <div
            class="case_dis_info_white"
          >久其软件长期为多家大型保险公司、资产管理公司、银行等金融企业提供费用管理、财务共享中心、财务合并报表、财务数据集市等产品的全面财务解决方案以及保险公司第二代偿付能力报告管理系统解决方案。</div>
        </div>
        <div class="case_dis_11">
          <img src="../assets/images/homeCase/case_11.jpg" width="317" height="247" alt>
        </div>
        <div class="case_dis_12">
          <div class="case_dis_title">军工制造</div>
          <div
            class="case_dis_info_white"
          >久其软件长期为多家大型军工和制造企业提供集团管控类解决方案，产品系列包括：财务共享中心系统、集团统计信息系统、财务管理系统、财务合并报表、财务核算、BI等项目。</div>
        </div>
      </div>
    </div>
    <div>{{isShow}}</div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import CarouselThroughly from '@/components/carousel/throughly.vue'
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      iCase: Array,
      iSupport: Array,
      iSolution: Array,
      banner: Array
    }
  },
  components: {
    CarouselThroughly
  },
  mounted () {
    let _this = this
    // 可以使用 vue-resource 加载跨域数据 也可以使用 webpack 配置进行跨域请求
    axios.get('/data/homeData.json').then(function (response) {
      _this.$set(_this.$data, 'iCase', response.data.iCase)
      _this.$set(_this.$data, 'iSupport', response.data.iSupport)
      _this.$set(_this.$data, 'iSolution', response.data.iSolution)
      _this.$set(_this.$data, 'banner', response.data.banner)
    }).catch(function (error) {
      console.log(error)
    })
    this.$store.dispatch('addCount', 10)
  },
  computed: {
    isShow () {
      return this.$store.getters.getCount
    }
  }
}
</script>
<style>
  @import url(../assets/css/index_new.css);
  @import url(../assets/css/style_2016.css);
</style>
