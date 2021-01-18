<template>
  <div id="spec-page">
    <Sidebar />
    <ContentContainer />
  </div>
</template>

<script>
import Sidebar from './SideBar.vue';
import ContentContainer from './ContentContainer.vue';

export default {
  name: 'SpecPage',
  components: {
    Sidebar,
    ContentContainer
  },
  props: {},
  data() {
    return {

    }
  }
}
</script>
