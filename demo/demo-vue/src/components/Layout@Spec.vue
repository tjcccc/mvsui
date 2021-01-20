<template>
  <div id="layout">
    <h3 class="border-w1 border-1010">Layout</h3>
    <div id="alignment" class="h-padding-s">
      <h4>Alignment</h4>
      <div class="h-padding-s">
        <div class="h-flexbox h-padding-s">
          <div class="square align-left">class: align-left</div>
          <div class="square align-center">class: align-center</div>
          <div class="square align-right">class: align-right</div>
          <div class="square align-justify">class: align-justify</div>
        </div>
        <div>
          <h5>Vertical Center</h5>
          <div class="rect align-center v-align-center">
            <p>class: v-align-center</p>
          </div>
        </div>
      </div>
    </div>
    <div id="spacing" class="h-padding-s">
      <h4>Spacing</h4>
      <div class="padding-s">
        <h5>Padding</h5>
        <p>base padding space (b): 0.8rem</p>
        <p>v-: vertical padding (top and bottom)</p>
        <ul>
          <li>class: v-padding-xs (1b)</li>
          <li>class: v-padding-s (2b)</li>
          <li>class: v-padding-m (4b)</li>
          <li>class: v-padding-l (6b)</li>
          <li>class: v-padding-xl (8b)</li>
        </ul>
        <p>h-: horizontal padding (right and left)</p>
        <ul>
          <li>class: h-padding-xs (1b)</li>
          <li>class: h-padding-s (2b)</li>
          <li>class: h-padding-m (4b)</li>
          <li>class: h-padding-l (6b)</li>
          <li>class: h-padding-xl (8b)</li>
        </ul>
      </div>
      <div class="h-padding-s">
        <h5>Margin</h5>
        <p>base margin space (b): 0.8rem</p>
        <p>v-: vertical margin (top and bottom)</p>
        <ul>
          <li>class: v-margin-xs (1b)</li>
          <li>class: v-margin-s (2b)</li>
          <li>class: v-margin-m (4b)</li>
          <li>class: v-margin-l (6b)</li>
          <li>class: v-margin-xl (8b)</li>
        </ul>
        <p>h-: horizontal margin (right and left)</p>
        <ul>
          <li>class: h-margin-xs (1b)</li>
          <li>class: h-margin-s (2b)</li>
          <li>class: h-margin-m (4b)</li>
          <li>class: h-margin-l (6b)</li>
          <li>class: h-margin-xl (8b)</li>
        </ul>
      </div>
    </div>
    <div id="container" class="h-padding-s">
      <h4>Container</h4>
      <div class="padding-s">
        <h5>Flex</h5>
        <p>horizontal flexbox</p>
        <p>class: h-flexbox</p>
        <div class="h-flexbox h-padding-xs">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
      </div>
      <div class="padding-s">
        <h5>Nesting</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutSpec",
  props: {},
  data() {
    return {};
  },
};
</script>
