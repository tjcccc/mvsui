<template>
  <header class="fixed full-width bg-blue-d3 v-padding-xs">
    <div class="h-flexbox items-center content-between">
      <h1 class="white h-padding-xl">
        <router-link to="/" class="slient-link">{{ title }}</router-link>
      </h1>
      <nav class="h-padding-l">
        <a v-for="menuItem in menuItems" href="javascript:void(0)" :key="menuItem.id" class="light padding-xs">
          <router-link :to="menuItem.link">{{ menuItem.name }}</router-link>
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import headerMenuItems from '../data/header-menu.json'

export default {
  name: 'Header',
  props: {
    title: String
  },
  data() {
    return {
      menuItems: headerMenuItems
    }
  }
}
</script>
