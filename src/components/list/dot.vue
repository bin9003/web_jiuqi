<template>
  <div class="news_list">
    <ul>
      <li v-for="list in dotLists" :key="list.key">
        <a
          :href="list.url"
          :title="list.content"
          target="_blank"
          v-html="list.content"
        ></a>
      </li>
    </ul>
    <div class="paginator"></div>
  </div>
</template>

<script>
export default {
  name: 'dotList',
  props: {
    dotLists: Array
  }
}
</script>
