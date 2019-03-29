<template>
  <div class="nav">
    <ul>
      <li v-for="list in dataNav.lists" :key="list.key">
        <router-link :to="list.url" target="_self" :class="[dataNav.active.url == list.url ? 'selected' : '']">
          <span>{{list.innerText}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop(Object) readonly dataNav!: Object
}
</script>
