<template>
  <div class="w200 mt5">
    <div v-for="list in leftSide" :key="list.key">
      <div class="w200">
        <img alt :src="list.icon">
        <h4>&nbsp;
          <span style="color:#333333">{{list.title}}</span>
        </h4>
      </div>
      <div class="w200" >
        <ul>
          <li v-for="table in list.lists" :key="table.key">
            <a :href="table.src">{{table.content}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Detail extends Vue {
  @Prop(Array) readonly leftSide !: Object
}
</script>
