<template>
  <div class="header-background lg:w-full"></div>
  <Popover class="relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img class="h-12 w-auto sm:h-15" src="../../../public/logo-blue.svg" alt="logo" />
          </a>
        </div>
        <div class="-mr-2 -my-2 flex lg:hidden">
          <a href="#" class="border-solid bg-gray-400 rounded-full bg-opacity-25 hover:bg-white mr-3">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="svg-inline--fa fa-search fa-w-16 h-11 w-auto sm:h-11 p-2 text-white hover:text-blue-700"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </a>
          <PopoverButton
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>

        <PopoverGroup as="nav" class="hidden lg:flex space-x-10">
          <Popover class="relative">
            <div :class="[' inline-flex items-center text-base font-medium ']">
              <router-link to="/docs" class="m-0 text-lg font-medium text-white media-effect"> Docs </router-link>
              <router-link to="/blog" class="m-0 text-lg font-medium text-white media-effect"> Blog </router-link>
              <router-link to="/community" class="m-0 text-lg font-medium text-white media-effect"> Community </router-link>
              <a href="#" class="hover:bg-gray-400 border-solid rounded-full hover:bg-opacity-25">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="slack"
                  class="svg-inline--fa fa-slack fa-w-14 h-11 w-auto sm:h-11 p-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="white"
                    d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"
                  ></path>
                </svg>
              </a>
              <a href="#" class="border-solid bg-gray-400 rounded-full bg-opacity-25 hover:bg-white ml-3">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="svg-inline--fa fa-search fa-w-16 h-11 w-auto sm:h-11 p-2 text-white hover:text-blue-700"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </a>
            </div>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
            </transition>
          </Popover>
          <Popover class="relative">
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
            </transition>
          </Popover>
        </PopoverGroup>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-10 w-auto sm:h-15" src="../../../public/logo-blue.svg" alt="logo" />
              </div>

              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>

            <div class="mt-6">
              <nav class="grid gap-y-8 text-center">
                <a href="#" class="m-0 text-lg font-medium"> Docs </a>
                <a href="#" class="m-0 text-lg font-medium"> Blog </a>
                <a href="#" class="m-0 text-lg font-medium"> Community </a>
                <a href="#"> Slack </a>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid';

const solutions = [
  {
    name: 'Docs',
    description: 'Documentation for Kyma.',
    href: '#',
  },
  {
    name: 'Blog',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  {
    name: 'Community',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
  },
  {
    name: 'Slack',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      resources,
      recentPosts,
    };
  },
};
</script>
<style lang="scss" scoped>
.header-background {
  top: -14vw;
  right: 0;
  background-position: center center;
  background-size: cover;
  content: ' ';
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzQ5LjYgNDI4Ij48cGF0aCBkPSJNODI0LjkuMmg5MjQuOXYzNzQuNmMtLjkuNy0yIC42LTMuMi42LTE0LjIgMC0yOC40LjMtNDIuNy0uMS0xNC4zLS40LTI3LjQtLjctNDEuMS0xLjVsLTI2LjYtMS40LTIzLjQtMS44Yy0xOC4xLTEuNC0zNi4xLTMuMy01NC4xLTUuNXMtMzguNS00LjgtNTcuNi04LjJsLTMuNy0uNWMtMS41LS4yLTIuOS0uNS00LjMtMS0xMi40LTQuNC0yNS04LjctMzcuNS0xMy4xLTIzLjctOC40LTQ3LjMtMTcuMS03MC42LTI2LjEtMTYtNi4yLTMxLjktMTIuNS00Ny42LTE5LTE4LjktNy44LTM3LjYtMTUuNi01Ni4zLTIzLjgtMTQtNi4xLTI4LTEyLjQtNDEuOS0xOC44LTIzLjYtMTAuOS00Ny4xLTIyLjEtNzAuMi0zMy44LTIzLjEtMTEuNy00NC4xLTIyLjYtNjUuNy0zNC41LTI5LjUtMTYuMS01OC42LTMyLjgtODcuMS01MC4zUzk1Ny40IDk5IDkyOSA3OS4zYy0yMi4xLTE1LjItNDMuNy0zMC45LTY0LjgtNDcuMS0xMC44LTguMi0yMS40LTE2LjUtMzEuOC0yNS0yLjEtMS43LTQuMS0zLjUtNi4zLTUuMXMtMS41LS45LTEuMi0xLjl6IiBmaWxsPSIjMjY1NWM2Ii8+PHBhdGggZD0iTTE0OTMgMzU0LjhjLTQtLjQtOC0xLjMtMTItMi0xMC40LTEuOS0yMC45LTMuOC0zMS4zLTUuOS03LjItMS40LTE0LjMtMi45LTIxLjQtNC4zLTE4LjEtMy45LTM2LTgtNTMuOS0xMi42LTEwLjktMi44LTIxLjYtNS44LTMyLjQtOC43LTEyLjYtMy41LTI1LjEtNy4yLTM3LjUtMTEuMS0xNi41LTUuMS0zMi45LTEwLjYtNDkuMi0xNi4zLTE2LjMtNS42LTMyLjQtMTEuNS00OC40LTE3LjYtMTAuNS00LjEtMjEtOC4yLTMxLjQtMTIuNC0xNC43LTUuOS0yOS4yLTEyLTQzLjctMTguMnMtMzAuMS0xMy40LTQ1LTIwLjMtMjcuNi0xMy4xLTQxLjItMTkuOC0zMC4xLTE1LjItNDUtMjMuMS0yNy4xLTE0LjctNDAuNi0yMi4ybC0yMC0xMS41Yy0uNC0uMy0xLS41LTEuNS0uNmwtNC43LTMuMmMtNi43LTQuNi0xMi42LTkuOS0xOC45LTE0LjktOC45LTcuMi0xNy42LTE0LjctMjYuNS0yMS45LTIuNy0yLjEtNS4zLTQuNC03LjktNi42LTguNC03LjQtMTYuOS0xNC43LTI1LjQtMjItMjEuNC0xOC4yLTQyLjEtMzctNjIuOC01NS45LTcuOC03LjEtMTUuNy0xNC4xLTIzLjEtMjEuNi0uNS0uNS0xLjMtMS0xLTEuOGg1Ni43YzEuOSAxLjggMy45IDMuNSA2LjEgNS4xbDUuOSA0LjhjNC42IDMuOCA5LjMgNy40IDE0IDExLjFzMTEuNyA5LjMgMTcuOCAxMy42YzQuNCAzLjIgOC42IDYuNyAxMyA5LjlsMTYuNyAxMi4xIDE1LjEgMTAuOWM0LjYgMy4zIDkuMyA2LjUgMTQgOS43IDcuMSA1LjEgMTQuNCA5LjggMjEuNyAxNC44czE0LjMgOS42IDIxLjUgMTQuM2M3LjIgNC43IDE2LjcgMTAuOCAyNS4yIDE2LjEgMTUuMSA5LjYgMzAuNCAxOC45IDQ1LjkgMjguMSAxMS4yIDYuNyAyMi42IDEzLjIgMzQgMTkuNmwyMi42IDEyLjYgMTkuMiAxMC42IDE1LjkgOC4zIDE2LjQgOC42IDEyLjUgNi40IDE1IDcuNiAxMS44IDUuOCAyNS4xIDEyLjIuNC4yIDE3LjkgOC4zYzE0LjEgNi44IDI4LjMgMTMuMSA0Mi42IDE5LjQgOSA0LjEgMTguMSA3LjkgMjcuMiAxMS45bDIxLjYgOS4xIDI1LjggMTAuNWM5LjEgMy43IDE4LjIgNy4zIDI3LjQgMTAuOCA5LjIgMy41IDE5LjcgNy44IDI5LjcgMTEuNGwyNi41IDkuOSAyNS40IDkgMTguMiA2LjQgMTUuNSA1LjJjLjItLjEuMy4xLjUuMnoiIGZpbGw9IiM0NzY3Y2YiLz48cGF0aCBkPSJNMTc0OS44IDQyOGMtNC4yLS43LTguMy0xLjctMTIuNC0yLjktMTQuMS0zLjQtMjguMi03LTQyLjItMTAuNi0xMC0yLjUtMjAtNS4zLTMwLTcuOS0xNC45LTQtMjkuNy04LTQ0LjQtMTIuMy0xOC43LTUuMy0zNy40LTEwLjctNTYtMTYuNS0xOC42LTUuOC0zNS0xMC45LTUyLjMtMTYuN2wtMTQuOC01LS44LS40YzQuMS4zIDguMSAxLjMgMTIuMiAxLjhsMTMuNiAyLjEgMTMuOSAyIDExLjEgMS40IDEzIDEuNiA5LjUgMSA5IDEgMTEuNCAxLjIgMTEuMyAxLjIgNS43LjVjNi42LjMgMTMgMS4xIDE5LjYgMS40bDE5LjUgMS40IDE2LjIuOCAyMSAuOWM1LjEuMyAxMC4xLjEgMTUuMS40IDE3IC45IDMzLjkuMyA1MC44LjVWNDI4eiIgZmlsbD0iIzA2YTI4ZSIvPjxwYXRoIGQ9Ik03NjguMi4ybC44LjhjNS4zIDUuMSAxMC44IDEwIDE2LjEgMTUuMSAxNi4yIDE1LjIgMzIuOCAzMCA0OS40IDQ0LjggNS45IDUuMyAxMS45IDEwLjYgMTggMTUuOCAzLjggMy4yIDcuMyA2LjUgMTEuMSA5LjcgNiA1IDExLjkgMTAuMiAxNy45IDE1LjJsMTMuMSAxMSAxOC4yIDE1LjFjNC43IDMuOSA5LjQgNy44IDE0LjIgMTEuNSAyLjEgMS42IDQgMy42IDYuMyA1IC4yLjIuMy41LjUuNy0zLjgtMS43LTcuMi00LjEtMTAuOC02LjEtMzQuMy0yMC40LTY3LjgtNDEuOC0xMDAuNi02NC4yLTE5LjUtMTMuNC0zOC42LTI3LTU3LjUtNDEtMTMuOS0xMC41LTI3LjYtMjEtNDEuMS0zMS42LS44LS41LTEuNC0xLjUtMi42LTEuNHMxLS40IDEuNC0uNGg0NS42eiIgZmlsbD0iIzgyNzhlYiIvPjwvc3ZnPg==)
    0% 0% / 100% 45vw no-repeat;
  min-height: 45vw;
  display: block;
  position: absolute;
  @media (max-width: 1024px) {
    width: 150%;
    min-height: 60vw;
  }
}

.media-effect:before {
  color: white;
  display: inline-block;
  opacity: 0;
  transition: transform 0.3s, opacity 0.2s;
  content: '[';
}

.media-effect:after {
  color: white;
  display: inline-block;
  opacity: 0;
  transition: transform 0.3s, opacity 0.2s;
  content: ']';
}

.media-effect:active:before,
.media-effect:focus:before,
.media-effect:hover:before {
  opacity: 1;
}

.media-effect:active:after,
.media-effect:focus:after,
.media-effect:hover:after {
  opacity: 1;
}
</style>
