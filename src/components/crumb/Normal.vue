<template>
  <div class="page4 position1">
    <span v-for="list in crumbData" :key="list.key"><a :href="list.src" v-html="list.name">首页</a> »</span> 正文
  </div>
</template>

<script>
export default {
  name: 'crumbNormal',
  props: {
    crumbData: []
  }
}

</script>
