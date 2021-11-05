<template>
  <header class="flex app-header">
    <img :src="blogheader" class="header-background" />
    <div class="container m-auto header-section">
      <a href="/">
        <img :src="logo" class="header-logo" />
      </a>
      <div class="flex">
        <iframe :src="githubStars" frameBorder="0" scrolling="0" />
        <iframe :src="githubForks" frameBorder="0" scrolling="0" />
      </div>
    </div>
  </header>
</template>

<script>
import blogheader from './blog-header.svg';
import logo from './logo.svg';
export default {
  setup() {
    return {
      blogheader,
      logo,
      githubStars:
        'https://ghbtns.com/github-btn.html?user=kyma-project&repo=kyma&type=star&count=true',
      githubForks:
        'https://ghbtns.com/github-btn.html?user=kyma-project&repo=kyma&type=fork&count=true',
    };
  },
};
</script>

<style lang="scss">
.header-background {
  position: absolute;
  width: 100%;
  display: block;
  z-index: 1;
  object-fit: cover;
  top: -2vw;
  min-height: 150px;
}
.app-header {
  margin-bottom: 7vw;
}

.header-section {
  padding: 30px 30px 0px;
  z-index: 3;
}

.header-logo {
  margin-bottom: 15px;
  width: 173px;
}

iframe {
  width: 95px;
  height: 20px;
}
</style>
