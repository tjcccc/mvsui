<template>
  <div id="shapes">
    <h3 class="border-w1 border-1010">Shapes</h3>
    <div class="h-padding-s">
      <div id="solid-border">
        <h4>Solid Border</h4>
        <h5>Border Width Level 1</h5>
        <div class="square-b0 border-w1"></div>
        <h5>Border Width Level 2</h5>
        <div class="square-b0 border-w2"></div>
        <h5>Border Width Level 3</h5>
        <div class="square-b0 border-w4"></div>
        <h5>Border Width Level 4</h5>
        <div class="square-b0 border-w8"></div>
      </div>
      <div id="radious-square">
        <h4>Border Raidous</h4>
        <h5>Level 1</h5>
        <div class="square border-r1"></div>
        <h5>Border Radious Level 2</h5>
        <div class="square border-r2"></div>
        <h5>Border Radious Level 3</h5>
        <div class="square border-r3"></div>
        <h5>Border Radious Level 4</h5>
        <div class="square border-r4"></div>
        <h5>Border Radious Level 5</h5>
        <div class="square border-r5"></div>
        <h5>Border Radious 25% Round</h5>
        <div class="square border-qr"></div>
      </div>
      <div id="round">
        <h4>Round</h4>
        <div class="square round"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShapesSpec",
  props: {},
  data() {
    return {};
  },
};
</script>
