<template>
  <div id="status-bar" class="container-fluid">
    <div class="row">
      <div class="col-3 col-md-5 col-lg-5">
        <BurgerMenu @click="toggleMenu" />
        <CurrentTime />
      </div>
      <div class="col-9 col-md-7 col-lg-7">
        <SearchForm />
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from './SearchForm.vue';
import CurrentTime from './CurrentTime.vue';
import BurgerMenu from './BurgerMenu.vue';

import { useToggleMenu } from '../../hooks';

export default {
  name: 'Header',
  components: {
    SearchForm,
    CurrentTime,
    BurgerMenu,
  },
  setup() {
    const { toggleMenu } = useToggleMenu();

    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
#status-bar {
  background-color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
}

#status-bar > .row > div[class^='col-'] {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}

@media (max-width: 768px) {
  #status-bar {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #8d5da7;
  }
}

.dark-mode {
  #status-bar {
    background-color: #302539;
  }
  @media (max-width: 768px) {
    #status-bar {
      background-color: #8d5da7;
    }
  }
}
</style>
