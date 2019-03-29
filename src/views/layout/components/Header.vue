<template>
  <div id="header">
    <div class="header_info">
      <div class="header_center">
        <Search></Search>
        <div class="logo">
          <a href="/">
            <img src="@/assets/images/logo.png" height="70" width="173" alt>
          </a>
        </div>
        <headerNav :dataNav="dataHeads.nav"></headerNav>
      </div>
    </div>
  </div>
</template>

<script>
import headerNav from '@/components/navbar/HeaderNav.vue'
import Search from '@/components/form/search/Search.vue'
export default {
  name: 'Header',
  props: {
    dataHeads: Object
  },
  components: {
    headerNav,
    Search
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  font-size: 40px;
  background-color: blue;
}
</style>
