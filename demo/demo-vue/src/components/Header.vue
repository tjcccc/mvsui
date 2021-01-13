<template>
  <header class="fixed full-width bg-blue-d3 v-padding-xs">
    <div class="h-flexbox items-center content-between">
      <h1 class="white h-padding-xl"><a href="./spec.html" class="slient-link">{{ title }}</a></h1>
      <nav class="h-padding-l">
        <a href="./spec.html" class="light padding-xs">Spec</a>
        <a href="#" class="light padding-xs">Components</a>
        <a href="#" class="light padding-xs">Forum</a>
        <a href="#" class="light padding-xs">Table</a>
        <a href="#" class="light padding-xs">Article</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
