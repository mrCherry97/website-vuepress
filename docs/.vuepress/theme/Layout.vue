<template>
  <div>
    <header class="flex app-header">
      <img src="@assets/blog-header.svg" class="header-background" />
      <div class="container m-auto header-section">
        <a href="/">
          <img src="@assets/logo.svg" width="173" class="header-logo" />
        </a>
        <div>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=kyma-project&repo=kyma&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="95px"
            height="20px"
          />
          <iframe
            src="https://ghbtns.com/github-btn.html?user=kyma-project&repo=kyma&type=fork&count=true"
            frameBorder="0"
            scrolling="0"
            width="95px"
            height="20px"
          />
        </div>
      </div>
    </header>
    <section class="flex m-auto container">
      <div class="xl:w-1/5 px-3 w-0">
        <div class="custom-sidebar" :class="{ isMobileMenu: isMobileMenu }">
          <Sidebar />
        </div>
        <div
          class="mobile-btn xl:invisible z-20"
          :class="{ isMobileBtn: isMobileMenu }"
          style="left: 30px"
          v-on:click="mobileMenu = !mobileMenu"
        >
          <img :src="require('@assets/mobile-button.svg')" />
        </div>
      </div>
      <div class="xl:w-3/5 px-3 lg:w-4/5 w-full main-content overflow-x-auto">
        <h1>{{ $page.frontmatter.title }}</h1>
        <Content />
      </div>
      <div class="anchor-fixed lg:w-1/5 px-3 sticky top-0 z-1 hidden lg:block">
        <RightAnchor class="sticky top-0 anchor-fixed-mobile" />
      </div>
    </section>
    <footer>
      <div class="flex justify-center items-center app-footer">
        <div class="z-10">
          <div class="flex mb-4 justify-center">
            <img src=@assets/kyma-logo-small.svg width="79px"/>
          </div>
          <div class="flex mb-4 justify-center footer-copyright">
            Copyright © 2018-2021 The Kyma project authors
          </div>
          <div class="mb-4 flex justify-center flex-wrap">
            <div
              class="mr-2 flex items-center media-effect cursor-pointer"
              v-for="item in socialMediaList"
              :key="item.name"
            >
              <a :href="item.href" target="_blank">
                <img
                  :src="require(`@assets/${item.icon}`)"
                  width="14px"
                  class="mr-2"
                /><span class="footer-social-text">{{ item.name }}</span>
              </a>
            </div>
          </div>
          <div class="flex mb-4 justify-center">
            <a href="https://www.netlify.com/" target="_blank">
              <img src=@assets/netlify.svg width="114px"/>
            </a>
          </div>
        </div>
        <img src="@assets/footer.svg" class="footer-background z-0" />
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobileMenu: false,
      socialMediaList: [
        {
          name: "Twitter",
          icon: "twitter-icon.svg",
          href: "https://twitter.com/kymaproject",
        },
        {
          name: "GitHub",
          icon: "github-icon.svg",
          href: "https://github.com/kyma-project",
        },
        {
          name: "Slack",
          icon: "slack-icon.svg",
          href: "http://slack.kyma-project.io/",
        },
        {
          name: "LinkedIn",
          icon: "linkedin-icon.svg",
          href: "https://www.linkedin.com/company/kyma-project/",
        },
        {
          name: "Youtube",
          icon: "youtube-icon.svg",
          href: "https://www.youtube.com/channel/UC8Q8bBtYe9gQN-dQ-_L8JvQ",
        },
      ],
    };
  },
  computed: {
    isMobileMenu() {
      return this.mobileMenu;
    },
  },
};
</script>