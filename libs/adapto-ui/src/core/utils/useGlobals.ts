import { getCurrentInstance, inject, ref } from 'vue';
// import { injectStyles } from '../utils/inject-styles';

export function useGlobals(name: string){
  const instance = getCurrentInstance();

  const globalConfig = inject<string>('globalConfig');

  console.log('globalConfig', globalConfig);
  // const cssPrefix = inject<string>('cssPrefix');
  // const originalCssPrefix = inject<string>('originalCssPrefix');
  // const componentPrefix = inject<string>('componentPrefix');
  // const breakpoints = inject<string>('breakpoints');
  // const cmpName = ref('');
  // const cmpPrefix = ref('');

  // const injectComponentStyle = (id: string, css: string) => {
  //   if (!document.getElementById(id)) {
  //     const style = document.createElement('style');
  //     style.id = id;
  //     style.textContent = css;
  //     // document.head.appendChild(style);
  //     injectStyles(style, themeId as string)
  //   }
  // }

  // const defineComponentName = () => {
  //   if (!instance){
  //     return null
  //   }
  //   else{

  //     cmpName.value = name ? name : '';

  //     cmpPrefix.value = componentPrefix ? componentPrefix : '';

  //     if(cmpPrefix.value && cmpName.value){
  //       instance.type.name = `${cmpPrefix.value}${cmpName.value}`;
  //     }
  //   }

  //   return instance.type.name
  // }

  // const defineComponentPrefix = () => {

  //   cmpName.value = name ? name : '';

  //   cmpPrefix.value = componentPrefix ? componentPrefix : '';

  //   return `${cmpPrefix.value.toLowerCase()}-${cmpName.value.toLowerCase()}`;
  // }

  // const definePrefixToKebabCase = () => {
  //   const toKebabCase = name
  //     .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  //     .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
  //     .toLowerCase();

  //   cmpPrefix.value = componentPrefix ? componentPrefix.toLowerCase() : '';

  //   return {
  //     cmpClass: `${cmpPrefix.value}-${toKebabCase}`,
  //     cmpPrefix: componentPrefix
  //   }
  // }

  // return {
  //   cssPrefix,
  //   componentPrefix,
  //   originalCssPrefix,
  //   breakpoints,
  //   defineComponentName,
  //   defineComponentPrefix,
  //   injectComponentStyle,
  //   definePrefixToKebabCase
  // }
}
