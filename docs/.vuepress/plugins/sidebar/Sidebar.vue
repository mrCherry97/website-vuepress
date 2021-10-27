<template>
  <SidebarItem :pages="pages" :item="item" />
</template>

<script>
import SidebarItem from "./SidebarItem";

export default {
  name: "sidebar",
  components: {
    SidebarItem,
  },
  props: {
    item: Object,
    pages: Array,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  destroyed() {},
  methods: {},
};
</script>

