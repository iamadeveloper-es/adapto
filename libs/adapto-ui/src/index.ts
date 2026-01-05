import { App } from "vue";

import rippleDirective from './directives/ripple-effect';
import { vClickOutside } from './directives/v-click-outside';
import { useConfig } from './core/config';
const adaptoCore = useConfig();



export default {
  install: (app: App, options?: any) => {

    adaptoCore.init(app, options);
    app.directive('ripple', rippleDirective);
    app.directive('click-outside', vClickOutside);
  }
};

export * from './components';
