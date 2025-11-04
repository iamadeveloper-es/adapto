import { App } from 'vue';

import rippleDirective from './directives/ripple-effect';
import { vClickOutside } from './directives/v-click-outside';
import { useConfig } from './core';
const adaptoCore = useConfig();

export default {
  install: (app: App, options?: any) => {

    adaptoCore.init(app, options);
    app.directive('ripple', rippleDirective);
    app.directive('click-outside', vClickOutside);
  }
};


//  export * from './components/atoms';
//  export * from './components/molecules';
 export * from './components/cells';
//  export * from './components/organisms';
