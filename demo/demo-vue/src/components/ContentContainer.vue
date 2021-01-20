<template>
  <div id="page" class="h-flexbox h-margin-m">
    <main class="h-padding-m v-padding-s" style="margin: 80px 0 0 200px;">
      <h2 class="white bg-green-d2 h-padding-s v-padding-s border-r1">Spec</h2>
      <component :is="specComponent">
      <!-- <FontSizeSpec />
      <ColorSpec />
      <ShapesSpec />
      <ShadowsSpec />
      <AppearanceSpec />
      <LayoutSpec /> -->
    </main>
    <aside class="page-sticky" style="margin-top: 80px;">
      <div>
        <a href="#page">TOP</a>
      </div>
    </aside>
  </div>
</template>

<script>
import FontSizeSpec from './FontSize@Spec.vue';
import ColorSpec from './Color@Spec.vue';
import ShapesSpec from './Shapes@Spec.vue';
import ShadowsSpec from './Shadows@Spec.vue';
import AppearanceSpec from './Appearance@Spec.vue';
import LayoutSpec from './Layout@Spec.vue';

export default {
  name: 'ContentContainer',
  components: {
    FontSizeSpec,
    ColorSpec,
    ShapesSpec,
    ShadowsSpec,
    AppearanceSpec,
    LayoutSpec
  },
  props: {
  },
  data() {
    return {
      specComponent: FontSizeSpec
    }
  }
}
</script>
