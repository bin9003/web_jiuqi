<template>
  <div class="nav" v-if="dataNav">
    <ul>
      <li v-for="list in navLists" :key="list.key">
        <router-link :to="list.url" target="_self">
          <span>{{list.innerText}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'headerNav',
  data () {
    return {
      nowPath: '',
      navLists: []
    }
  },
  props: {
    dataNav: Object
  },
  watch: {
    dataNav: function (newVal, oldVal) {
      this.$set(this.$data, 'navLists', this.dataNav.lists)
    }
  }
}
</script>
