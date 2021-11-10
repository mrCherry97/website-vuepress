<template>
  <Header />
  <Hello msg="Welcome to Your Vue.js App" />
  <Footer />
</template>

<script>
import Header from './HomePage/Header.vue';
import Hello from './HomePage/HelloWorld.vue';
import Footer from './Footer/Footer.vue';

export default {
  components: {
    Header,
    Hello,
    Footer,
  },
};
</script>
