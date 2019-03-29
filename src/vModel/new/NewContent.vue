<template>
  <div class="newContent">
    <ImgBanner :banner="newList.banner"></ImgBanner>
    <ListDefine :listData="newList.lists"></ListDefine>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ImgBanner from '@/components/banner/ImgBanner.vue'
import ListDefine from '@/components/list/Define.vue'

@Component({
  components: {
    ImgBanner,
    ListDefine
  }
})
export default class NewContent extends Vue {
  @Prop(Object) readonly newList !: Object
}
</script>
