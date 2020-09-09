import VueCompositionApi, {
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';
import Vue from 'vue';

// We won't need to do that in Vue 3
Vue.use(VueCompositionApi);

function toggleBodyClass(isDarkMode) {
  var body = document.body;
  if (isDarkMode) body.classList.add('dark-mode');
  else body.classList.remove('dark-mode');
}

const state = reactive({
  isDarkMode: false,
});

const useDarkMode = () => {
  state.isDarkMode = JSON.parse(localStorage.getItem('zid-panel-darkmode'));

  toggleBodyClass(state.isDarkMode);

  const toggleDarkMode = () => {
    state.isDarkMode = !state.isDarkMode;

    localStorage.setItem('zid-panel-darkmode', state.isDarkMode);
  };

  watch(() => state.isDarkMode, toggleBodyClass);

  return {
    ...toRefs(state),
    toggleDarkMode,
  };
};

export default useDarkMode;

/* var darkmode = localStorage.getItem('zid-panel-darkmode');
if(darkmode != "false"){
    document.getElementById("dark-style-toggle").setAttribute("href", "css/dark-mode.css");
}
 */
