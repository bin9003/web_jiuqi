<template>
  <div id="app">
    <Header :dataHeader="dataHeaders"></Header>
    <router-view/>
    <Footer :dataFooter="dataFooter"></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
  data () {
    return {
      dataHeaders: {
        nav: {
          active: {
            url: '/',
            innerText: '首页'
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
      },
      dataFooter: {
        fNav: [
          {
            title: {
              name: '关于久其',
              url: '/about'
            },
            lists: [
              {
                name: '新闻中心',
                url: '/new'
              },
              {
                name: '联系我们',
                url: '/'
              },
              {
                name: '法律条款',
                url: '/'
              },
              {
                name: '网站地图',
                url: '/'
              },
              {
                name: '久其元素',
                url: '/'
              }
            ]
          },
          {
            title: {
              name: '旗下品牌',
              url: ''
            },
            lists: [
              {
                name: '亿起联科技',
                url: ''
              },
              {
                name: '华夏电通',
                url: ''
              },
              {
                name: '久其智通',
                url: ''
              },
              {
                name: '久金所',
                url: ''
              },
              {
                name: '蜂语网络',
                url: ''
              },
              {
                name: '瑞意恒动',
                url: ''
              },
              {
                name: '久其云福',
                url: ''
              },
              {
                name: 'PandaMobo',
                url: ''
              },
              {
                name: '中民颐养',
                url: ''
              },
              {
                name: '上海移通',
                url: ''
              },
              {
                name: '久金保',
                url: ''
              },
              {
                name: '久易商',
                url: ''
              }
            ]
          },
          {
            title: {
              name: '解决方案',
              url: ''
            },
            lists: [
              {
                name: '政府管理与服务',
                url: ''
              },
              {
                name: '企业集团管控',
                url: ''
              },
              {
                name: '久其报表',
                url: ''
              },
              {
                name: '久其大数据',
                url: ''
              },
              {
                name: '久其GMC',
                url: ''
              },
              {
                name: '久其DNA',
                url: ''
              },
              {
                name: '久其数字传播',
                url: ''
              },
              {
                name: '智能交通',
                url: ''
              }
            ]
          }
        ],
        info: [
          {
            title: '公司总部',
            content: '北京经济技术开发区西环中路6号(100176)'
          },
          {
            title: '公司分部',
            content: '北京市海淀区文慧园甲12号(100082)'
          },
          {
            title: '总　　机',
            content: '010-88551199'
          },
          {
            title: '客服热线',
            content: '400 119 9797'
          },
          {
            title: '邮　　箱',
            content: 'jiuqi@jiuqi.com.cn'
          }
        ],
        QRcode: {
          src: '/images/erweima_new.jpg',
          name: ''
        }
      }
    }
  }
}
</script>
