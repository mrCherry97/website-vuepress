import { defineClientAppEnhance } from '@vuepress/client';
import { h } from 'vue';
import Sidebar from './Sidebar.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Sidebar', {
    setup() {
      return () => h(Sidebar, { router });
    },
  });
});
