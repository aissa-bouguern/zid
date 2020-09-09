import VueCompositionApi, { reactive, toRefs } from '@vue/composition-api';
import Vue from 'vue';

// We won't need to do that in Vue 3
Vue.use(VueCompositionApi);

const state = reactive({
  isMenuOpen: true,
});

const useToggleMenu = () => {
  const toggleMenu = () => {
    state.isMenuOpen = !state.isMenuOpen;
  };

  return {
    ...toRefs(state),
    toggleMenu,
  };
};

export default useToggleMenu;
