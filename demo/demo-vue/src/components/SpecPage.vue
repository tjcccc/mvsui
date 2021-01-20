<template>
  <div id="spec-page">
    <Sidebar :menuItems="sidebarMenuItems" />
    <ContentContainer />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import ContentContainer from './ContentContainer.vue';
import menuItems from '../data/siderbar-spec.json';

export default {
  name: 'SpecPage',
  components: {
    Sidebar,
    ContentContainer
  },
  props: {},
  data() {
    return {
      sidebarMenuItems: menuItems
    };
  }
}
</script>
