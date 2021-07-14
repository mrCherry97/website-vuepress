import Sidebar from "./Sidebar.vue";

export default ({ Vue, siteData }) => {
  const docs = siteData.themeConfig.docs;

  Vue.component("Sidebar", {
    name: "Sidebar",
    functional: true,
    render() {
      return <Sidebar pages={siteData.pages} item={docs} />;
    },
  });
};
