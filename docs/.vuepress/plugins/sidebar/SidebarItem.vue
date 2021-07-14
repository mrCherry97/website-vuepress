<template>
  <ul
    v-if="newItem.name !== 'README.md' && newItem.name !== 'assets' && newItem"
  >
    <li
      v-if="newItem.name !== folderName"
      :class="{ bold: isFolder }"
      @click="toggle"
    >
      <img
        v-if="isFolder"
        :src="
          isOpen
            ? require('@assets/arrow-up.svg')
            : require('@assets/arrow-down.svg')
        "
        style="margin-right: 5px"
        :width="isOpen ? 12 : 9"
        :class="{
          isGrayScale: !containsURL(),
        }"
      />
      <a
        :href="link"
        :class="{
          contains: containsURL(),
          normal: !containsURL(),
          isSelected: isItemSelected(),
        }"
        v-if="link !== ''"
      >
        {{ pathName }}
      </a>
      <span
        v-else
        :class="{
          contains: containsURL(),
          normal: !containsURL(),
          isSelected: isItemSelected(),
        }"
      >
        {{ pathName }}
      </span>
    </li>
    <div v-show="isOpen" v-if="isFolder">
      <sidebaritem
        class="item"
        v-for="(child, index) in newItem.children"
        :key="index"
        :item="child"
        :pages="pagesNew"
      ></sidebaritem>
    </div>
  </ul>
</template>

<script>
export default {
  name: "sidebaritem",
  props: {
    item: Object,
    pages: Array,
  },
  data() {
    return {
      isOpen: false,
      newItem: this.item,
      pagesNew: this.pages,
      href: "",
      folderName: "guide",
    };
  },
  computed: {
    isFolder() {
      return this.newItem.children && this.newItem.children.length;
    },
    pathName() {
      let newName = this.newItem.name;
      const newPath = `${this.folderName}/${
        this.newItem.path.split(`/${this.folderName}/`)[1]
      }`;
      this.pagesNew.forEach((page) => {
        if (
          String(page.relativePath.replace("/README.md", "")) ===
          String(newPath)
        ) {
          newName = page.title;
        }
      });

      return newName;
    },
    link() {
      let hasReadme = false;
      let link = `/${this.folderName}/${
        this.newItem.path.split(`/${this.folderName}/`)[1]
      }`;

      console.log(link);

      this.newItem.children &&
        this.newItem.children.length > 0 &&
        this.newItem.children.forEach((child) => {
          if (child.name === "README.md") {
            hasReadme = true;
          }
        });

      if (link.includes(".md") || hasReadme) {
        return link.replace("README", "").replace(".md", "");
      }

      return "";
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    containsURL() {
      return this.href !== ""
        ? this.href.includes("/" + this.newItem.name)
        : false;
    },
    isItemSelected() {
      if (this.href === "") return false;

      const newHref =
        this.href[this.href.length - 1] === "/"
          ? this.href.substring(0, this.href.length - 1)
          : this.href;

      const windowLocation = newHref.includes(this.folderName)
        ? `/${this.folderName}/${newHref
            .split(`/${this.folderName}/`)[1]
            .replace(".html", "")}`
        : this.href;

      return this.link === windowLocation;
    },
  },
  mounted() {
    this.href = window.location.href;
    const isURLItem = this.href.includes("/" + this.newItem.name);

    if (this.newItem.name === this.folderName || isURLItem) {
      this.isOpen = true;
    }
  },
};
</script>

<style lang="stylus" scoped>
.custom-sidebar {
  .item {
    margin-top: 10px;
    cursor: pointer;
  }

  .bold {
    font-weight: bold;
  }

  .contains {
    color: rgb(11, 116, 222) !important;
    font-weight: normal;
  }

  .isSelected {
    color: rgb(11, 116, 222) !important;
    font-weight: bold !important;
  }

  .normal {
    color: rgb(72, 87, 102);
    font-weight: 500;
  }

  ul, li {
    list-style: none;
  }

  .emptyURL {
    pointer-events: none;
    cursor: default !important;
  }

  a:hover {
    color: rgb(11, 116, 222) !important;
  }

  .isGrayScale {
    filter: grayscale(1);
  }
}
</style>
