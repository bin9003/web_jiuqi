<template>
  <div class="w250 fr mt5" v-if="sideData">
    <!--新闻中心_Begin-->
    <div class="case_left_news w98">&nbsp;</div>
    <div class="w98">
      <ul class="case_ul">
        <li
          v-for="(list, index) in sideData.lists"
          :key="list.key"
          :class="[(index < (sideData.lists.length - 1)) ? caseBottom : '', sidebarStyle]"
        >
          <a
            title="list.name"
            target="_blank"
            href="list.src"
            v-html="list.name"
          ></a>
        </li>
      </ul>
    </div>
    <!--新闻中心_End-->
  </div>
</template>

<script>
export default {
  name: 'recommendedNormal',
  props: {
    sideData: {}
  }
}
</script>
