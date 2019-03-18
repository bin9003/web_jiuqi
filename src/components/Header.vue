<template>
  <div id="header">
    <div class="header_info">
      <div class="header_center">
        <!--搜索-->
        <Search></Search>
        <!--搜索END-->
        <div class="logo">
          <a href="/">
            <img src="../assets/images/logo.png" height="70" width="173" alt>
          </a>
        </div>
        <Nav :dataNav="dataHeader.nav"></Nav>
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
  @Prop(Object) readonly dataHeader!: Object
}
</script>
