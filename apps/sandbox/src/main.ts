import './styles.css';
import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import Adapto from '@adapto/adapto-ui';

const adaptoOptions = {
  options: {
    prefix: 'rsi',
  },
  styles: {
    tokens: {
      primitive: {
        blue: {
          500: '#1e40af',
          300: '#60a5fa',
          350: '#4d99f6ff',
        }
      },
      semantic: {
        primary: 'blue.500',
        background: 'blue.350'
      },
      component: {
        btn: {
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
