<template>
  <footer>
    <div class="flex justify-center items-center app-footer">
      <div class="z-10">
        <div class="flex mb-4 justify-center">
          <img src="../../public/kyma-logo-small.svg" class="kyma-logo-small" />
        </div>

        <div class="mb-4 flex justify-center flex-wrap">
          <div
            class="mr-2 flex items-center media-effect cursor-pointer"
            v-for="item in socialMediaList"
            :key="item.name"
          >
            <a :href="item.href" target="_blank" class="flex">
              <img
                :src="require(`../../public/${item.icon}`)"
                class="mr-2 social-media-logo"
              /><span class="footer-social-text">{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div class="flex mb-4 justify-center footer-copyright">
          <p>
            <span>
              Copyright © 2018-2021 The Kyma project authors
              <a
                href="https://www.sap.com/corporate/en/legal/privacy.html"
                target="_blank"
                class="privacy-statement"
                ><span>Privacy Statement</span>
                <img
                  src="../../public/link-direction-icon.svg"
                  alt="Privacy Statement"
                  class="privacy-statement-logo" /></a
            ></span>
          </p>
        </div>
      </div>
      <img src="../../public/footer.svg" class="footer-background z-0" />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialMediaList: [
        {
          name: 'Twitter',
          icon: 'twitter-icon.svg',
          href: 'https://twitter.com/kymaproject',
        },
        {
          name: 'GitHub',
          icon: 'github-icon.svg',
          href: 'https://github.com/kyma-project',
        },
        {
          name: 'Slack',
          icon: 'slack-icon.svg',
          href: 'http://slack.kyma-project.io/',
        },
        {
          name: 'LinkedIn',
          icon: 'linkedin-icon.svg',
          href: 'https://www.linkedin.com/company/kyma-project/',
        },
        {
          name: 'Youtube',
          icon: 'youtube-icon.svg',
          href: 'https://www.youtube.com/channel/UC8Q8bBtYe9gQN-dQ-_L8JvQ',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.app-footer {
  margin-top: 172px;
  padding-top: 24px;
}

.footer-copyright {
  color: white;
  font-size: 12px;
}

.footer-background {
  width: 100%;
  height: 270px;
  display: block;
  position: absolute;
  z-index: 1;
}

.footer-social-text {
  font-size: 14px;
  color: white;
}

.media-effect:before {
  color: white;
  display: inline-block;
  opacity: 0;
  transition: transform 0.3s, opacity 0.2s;
  margin-left: 10px;
  content: '[';
  transform: translateX(10px);
}

.media-effect:after {
  color: white;
  display: inline-block;
  opacity: 0;
  transition: transform 0.3s, opacity 0.2s;
  margin-right: 10px;
  content: ']';
  transform: translateX(-10px);
}

.media-effect:active:before,
.media-effect:focus:before,
.media-effect:hover:before {
  opacity: 1;
  transform: translateX(-10px);
}

.media-effect:active:after,
.media-effect:focus:after,
.media-effect:hover:after {
  opacity: 1;
  transform: translateX(10px);
}

.kyma-logo-small {
  width: 79px;
}

.social-media-logo {
  width: 14px;
}
.privacy-statement-logo {
  display: inline-block;
  margin-left: 4px;
  width: 10px;
  height: 10px;
  position: relative;
  top: -1px;
}
.privacy-statement {
  text-decoration: underline;
}
</style>
