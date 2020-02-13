import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blueGrey.darken4,
        accent: colors.blueGrey.darken4,
        secondary: colors.orange.base,
        error: colors.red.base,
        warning: colors.deepOrange.base,
        info: colors.cyan.base,
        success: colors.green.base,
      },
    },
  },
});
