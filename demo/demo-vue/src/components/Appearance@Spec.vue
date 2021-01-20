<template>
  <div id="appearance">
    <h3 class="border-w1 border-1010">Appearance</h3>
    <div class="h-padding-s">
      <div class="h-padding-s">
        <h4>Hide</h4>
        <p>class: hide</p>
        <div class="square"></div>
        <div class="square hide"></div>
        <div class="square"></div>
      </div>
      <div class="h-padding-s">
        <h4>Transparent</h4>
        <p>class: transparent</p>
        <div class="square"></div>
        <div class="square transparent"></div>
        <div class="square"></div>
      </div>
      <div class="h-padding-s">
        <h4>Half Transparent</h4>
        <p>class: half-transparent</p>
        <div class="square bg-red"></div>
        <div class="square bg-red half-transparent"></div>
        <div class="square bg-red"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppearanceSpec",
  props: {},
  data() {
    return {};
  },
};
</script>
