import './styles.css';
import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import Adapto from '@adapto/adapto-ui';
// import PrimeVue from 'primevue/config';
// import Aura from '@primeuix/themes/aura';

const adaptoOptions = {
  options: {
    prefix: 'custom',
  },
  styles: {
    tokens: {
      primitive: {
        blue: {
          500: '#1539b3ff',
          300: '#60a5fa',
          350: '#4d99f6ff',
        }
      },
      semantic: {
        primary: 'blue.500',
        background: 'green.100'
      },
      component: {
        btn: {
          'bg': 'sm.background',
          'margin-y': [ 'cs.12px', 'cs.20px' ],
          'border-radius': 'cs.6px'
        }
      }
    }
  }
};


const app = createApp(App);

app.use(router);

app.use(Adapto, adaptoOptions);
// app.use(PrimeVue, {
//   theme: {
//         preset: Aura,
//         options: {
//             prefix: 'rsi',
//             darkModeSelector: 'system',
//             cssLayer: false
//         }
//     }
// });

app.mount('#root');
