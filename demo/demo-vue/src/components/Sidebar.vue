<template>
  <aside class="fixed h-padding-m v-padding-s" style="margin-top: 80px;">
    <h6>SIDEBAR MENU</h6>
    <div class="v-box font-l">
      <a href="#font-sizes">Font Size</a>
      <a href="#colors">Color</a>
      <a href="#shapes">Shapes</a>
      <a href="#shadows">Shadows</a>
      <a href="#appearance">Appearance</a>
      <a href="#layout">Layout</a>
      <div class="v-box h-padding-s font-m">
        <a href="#appearance">Appearance</a>
        <a href="#alignment">Alignment</a>
        <a href="#spacing">Spacing</a>
        <div class="v-box h-padding-s">
          <a href="#padding">Padding</a>
          <a href="#margin">Margin</a>
        </div>
        <a href="container">Container</a>
        <div class="v-box h-padding-s">
          <a href="">Flex</a>
          <a href="">Nesting</a>
        </div>
      </div>
      <!-- <a href="">Menu Item 5</a> -->
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
  },
  data() {
    return {
    }
  }
}
</script>
