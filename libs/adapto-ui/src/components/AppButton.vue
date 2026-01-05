<script lang="ts" setup>
import { inject, onUnmounted } from 'vue';
import buttonCss from './button.css?raw';
import { ThemeOptions } from '../core/themes/types';
import { pushStyle } from '../core/styles/styleStackHandler';

defineOptions({
  name: 'AppButton',
})

const globalConfig = inject('globalConfig') as ThemeOptions;
console.log(`Component prefix is: ${globalConfig.prefix}`);

const cssComponent = buttonCss.replace(/__PREFIX__/g, globalConfig.prefix);


pushStyle(`${globalConfig.id}-AppButton`, cssComponent);

onUnmounted(() => {
  document.getElementById(`${globalConfig.id}-AppButton`)?.remove();
})

</script>

<template>
  <button :class="`${globalConfig.prefix}-button`">
    <span :class="`${globalConfig.prefix}-label`">Click me!</span>
  </button>
</template>
