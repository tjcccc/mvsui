<template>
  <root>
    <Header title="msvui" />
    <Sidebar />
    <ContentPage />
    <Footer />
  </root>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import ContentPage from './components/ContentPage.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    ContentPage,
    Footer
  }
};
</script>
