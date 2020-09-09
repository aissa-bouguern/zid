<template>
  <div id="sidebar-wrapper" class="wrapper" :class="{ open: isMenuOpen }">
    <button class="btn-menu-close" @click="toggleMenu">
      <i class="zid zid-close"></i>
    </button>
    <div class="sidebar-content">
      <Head />
      <Nav />
    </div>
  </div>
</template>

<script>
import Head from './Head.vue';
import Nav from './Nav.vue';

import { useToggleMenu } from '../../hooks';

export default {
  name: 'Sidebar',
  components: {
    Head,
    Nav,
  },
  setup() {
    const { isMenuOpen, toggleMenu } = useToggleMenu();

    return { isMenuOpen, toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  width: 248px;
  height: 100%;
  top: 0;
  right: -248px;
  background-color: #362340;
  border-right: 1px solid transparent;
  z-index: 1000;
  overflow-y: scroll;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.wrapper.open {
  right: 0;
}

.wrapper.open .btn-close {
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
}

.btn-menu-close {
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  top: 15px;
  left: 10px;
  background: none;
  border: 0;
  font-size: 9px;
  pointer-events: none;
  padding: 6px;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn-menu-close:hover,
.btn-menu-close:focus {
  color: #fff;
}

.dark-mode {
  .wrapper {
    background-color: #17131c;
    border-color: #2f2539;
  }

  .wrapper.btn-menu-close {
    color: rgba(255, 255, 255, 0.5);
  }

  .wrapper.btn-menu-close:hover,
  .wrapper.btn-menu-close:focus {
    color: #fff;
  }

  .wrapper .btn-menu-close {
    color: rgba(255, 255, 255, 0.5);
  }

  .wrapper .btn-menu-close:hover,
  .wrapper .btn-menu-close:focus {
    color: #fff;
  }
}
</style>
