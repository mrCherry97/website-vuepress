<template>
  <div v-for="route in htmlRoutes" :key="route.path">
    <p @click="router.push(route.path)">{{ route.meta.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    router: Object,
  },
  setup(props) {
    const htmlRoutes = props.router
      .getRoutes()
      .filter(route => /html$/.test(route.path));
    return {
      htmlRoutes,
    };
  },
};
</script>

<style></style>
