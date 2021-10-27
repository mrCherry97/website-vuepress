<template>
  <header class="flex app-header">
    <img src="../../public/blog-header.svg" class="header-background" />
    <div class="container m-auto header-section">
      <a href="/">
        <img src="../../public/logo.svg" width="173" class="header-logo" />
      </a>
      <div class="flex">
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
</template>

<script>
export default {};
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
  z-index: 2;
}

.header-logo {
  margin-bottom: 15px;
}
</style>
