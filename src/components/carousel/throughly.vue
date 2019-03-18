<template>
  <!--banner began-->
  <div id="wrapper">
    <div class="fullwidthbanner-container">
      <div class="fullwidthbanner">
        <ul>
          <li
            data-transition="3dcurtain-vertical"
            data-slotamount="15"
            data-masterspeed="300"
            data-link="/download/index.jhtml"
            v-for="list in banner"
            :key="list.key"
          >
            <img :src="list.src" alt>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Throughly extends Vue {
  @Prop(Array) readonly banner !: Object
}
</script>
<style lang="scss">
.fullwidthbanner {
  img {
    width: 100%;
  }
}
</style>
