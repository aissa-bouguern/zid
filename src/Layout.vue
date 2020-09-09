<template>
  <div id="app">
    <Sidebar />
    <div id="page-content-wrapper" :class="{ 'menu-closed': !isMenuOpen }">
      <Header />
      <slot name="page-head"></slot>
      <div class="container-fluid other-content">
        <slot></slot>
      </div>
      <Footer />
    </div>
    <slot name="modals"></slot>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar.vue';
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

import { useToggleMenu } from './hooks';

import './assets/style/main.scss';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Footer,
  },
  setup() {
    const { isMenuOpen } = useToggleMenu();
    return {
      isMenuOpen,
    };
  },
};
</script>

<style lang="scss">
/* -----------------------------------
    - General Styles
------------------------------------*/
::selection {
  background-color: rgba(141, 93, 167, 0.8);
  color: white;
}

* {
  outline-color: #8d5da7 !important;
}

body {
  background-color: #f0f0f0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: #5b4665;
}

h6 {
  font-size: 14px;
  line-height: 25px;
}

.boxy-style {
  background-color: rgba(176, 129, 201, 0.25);
  color: #8c5da7;
  padding: 3px 8px;
  border-radius: 8px;
}

a {
  color: #45a787;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

a:hover,
a:focus {
  color: #36836a;
}

p {
  font-weight: 600;
}

.ul,
.ol {
  padding: 0 20px;
  margin: 0 0 15px;
}

.ul li,
.ol li {
  position: relative;
  font-size: 14px;
  color: #736884;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.ul li .ul,
.ol li .ul {
  padding: 0 10px;
  margin: 0;
}

.child-inline > * {
  display: inline-block;
}

/* -----------------------------------
    - DARK MODE
------------------------------------*/
.dark-mode {
  background-color: #1d1920;
  color: #fff;

  ::selection {
    background-color: rgba(141, 93, 167, 0.8);
    color: white;
  }

  * {
    outline-color: #8d5da7 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }
}
</style>
