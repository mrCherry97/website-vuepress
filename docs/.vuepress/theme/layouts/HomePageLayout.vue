<template>
  <Header />
  <HomePage />
  <Footer />
</template>

<script>
import Header from './HomePage/Header.vue';
import HomePage from './HomePage/HomePage.vue';
import Footer from './Footer/Footer.vue';

export default {
  components: {
    Header,
    HomePage,
    Footer,
  },
};
</script>
