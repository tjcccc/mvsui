<template>
  <root>
    <Header title="msvui" />
    <router-view></router-view>
    <Footer />
  </root>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>
