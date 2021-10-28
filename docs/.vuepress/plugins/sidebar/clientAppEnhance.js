import Sidebar from './Sidebar.vue';

import { defineClientAppEnhance } from '@vuepress/client';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  console.log(siteData);
  const docs = siteData.value.description;
  app.component('Sidebar', {
    name: 'Sidebar',
    functional: true,
    render() {
      return <Sidebar pages={siteData.pages} item={docs} />;
    },
  });
});

// export default ({ app, siteData }) => {
//   const docs = siteData.themeConfig.docs;
//   console.log(siteData);
//   app.component('Sidebar', {
//     name: 'Sidebar',
//     functional: true,
//     render() {
//       return <Sidebar pages={siteData.pages} item={docs} />;
//     },
//   });
// };
