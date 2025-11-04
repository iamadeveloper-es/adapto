<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, useSlots } from 'vue';

import { getDialogStyles } from './style.css';
import { useGlobals } from '../../../core/utils';
// import { VkButton } from '../../molecules';

// const {cssPrefix, injectComponentStyle, defineComponentName, definePrefixToKebabCase} = useComponentFunctions('Dialog');

useGlobals('Dialog');
defineOptions({
  name: 'VkDialog'
});

// defineComponentName();
// const {cmpClass} = definePrefixToKebabCase();
const cmpClass = 'vk-dialog';

const props = defineProps({
  blockBackdrop: {
    type: Boolean,
    default: false
  }
});


const modal = ref<HTMLDialogElement | null>(null);
let lastFocusedElement: HTMLElement | null = null;

const slots = useSlots();

const hasHeader = computed(() => !!slots['header'])
const hasBody = computed(() => !!slots['body'])
const hasFooter = computed(() => !!slots['footer'])


const open = () => {
  lastFocusedElement = document.activeElement as HTMLElement;
  modal.value?.showModal();
  modal.value?.focus();
};


const close = () => {
  modal.value?.close();
  lastFocusedElement?.focus();
};

function handleBackdrop(){
  modal.value?.addEventListener('click', (e) => {
    const rect = modal.value!.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!isInDialog) {
      close();
    }
  });
}

const configComponent = () => {
  // injectComponentStyle(`${cmpClass}-style`, getDialogStyles(cssPrefix, cmpClass));
  // if(!props.blockBackdrop){
  //   handleBackdrop();
  // }
};

onMounted(() => {
  configComponent();
});

onUnmounted(() => {
  if(!props.blockBackdrop){
    modal.value?.removeEventListener('click', handleBackdrop);
  }
});

defineExpose({ open, close });
</script>

<template>
  <dialog
    ref="modal"
    :class="`${cmpClass}`"
  >
    <div :class="`${cmpClass}__close`">
      <!-- <VkButton
        label="Close dialog"
        :show-label="false"
        variant="link"
        size="sm"
        radius="full"
        :icon="{name: 'x', size: 20}"
        @click="close"
      /> -->
    </div>
    <div :class="`${cmpClass}__content`">
      <div
        v-if="hasHeader"
        :class="`${cmpClass}__header`"
      >
        <slot name="header" />
      </div>
      <div
        v-if="hasBody"
        :class="`${cmpClass}__body`"
      >
        <slot name="body" />
      </div>
      <div
        v-if="hasFooter"
        :class="`${cmpClass}__footer`"
      >
        <slot name="footer" />
      </div>
    </div>
  </dialog>
</template>

<style>
.vk-dialog{
  width: 90%;
  max-width: 500px;
  border: none;
  border-radius: 8px;
  padding: .5rem 1rem 1rem 1rem;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  font-family: Arial, sans-serif;
  transform: scale(0.4);
  opacity: 0;
  animation: fadeInScale 0.2s ease forwards;
}
.vk-dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.15s ease forwards;
}

.vk-dialog__close {
  display: flex;
  justify-content: flex-end;
}

.vk-dialog__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
