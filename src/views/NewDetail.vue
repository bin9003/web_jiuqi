<template>
  <div class="main">
    <Header :dataHeader="dataHeaders" />
    <NewDetailContent></NewDetailContent>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import NewDetailContent from '@/vModel/new/NewDetailContent.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Header,
    NewDetailContent,
    Footer
  }
})
export default class NewDetail extends Vue {
  data () {
    return {
      dataHeaders: {
        nav: {
          active: {
            url: '/new',
            innerText: '新闻中心'
          },
          lists: [
            {
              url: '/',
              innerText: '首页'
            },
            {
              url: '/new',
              innerText: '新闻中心'
            },
            {
              url: '/solution',
              innerText: '解决方案'
            },
            {
              url: '/case',
              innerText: '经典案例'
            },
            {
              url: '/support',
              innerText: '服务支持'
            },
            {
              url: '/investor',
              innerText: '投资者'
            },
            {
              url: '/about',
              innerText: '关于久其'
            }
          ]
        }
      }
    }
  }
}
</script>

<style>
@import url(../assets/css/jiuqi.css);
@import url(../assets/css/jiuqi_case.css);
</style>
