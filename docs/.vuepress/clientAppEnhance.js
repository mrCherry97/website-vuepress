import HomePageLayoutVue from './theme/layouts/HomePageLayout.vue';
import LayoutVue from './theme/layouts/Layout.vue';

export default ({ router }) => {
  router.addRoute({ path: '/', component: HomePageLayoutVue });
  router.addRoute({ path: '/docs', component: LayoutVue });
};
