<script lang="ts" setup>
import { computed, onMounted, PropType, ref } from 'vue';
import buttonCss from './adp-button.css?raw';
import AdpIcon from '../adp-icon/index.vue';
import { Size, Variant, Radius, Icon } from '../../types/components.global';
import { useComponentHandler } from '../../core/utils/useComponentHandler';

const { handleConfig, globalConfig } = useComponentHandler()

handleConfig('Button', buttonCss);

type BtnSize = Extract<Size, 'sm' | 'md' | 'lg' | 'full'>;
type ButtonType = 'button' | 'submit';
type Alignment = 'start' | 'center' | 'end';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  showLabel: {
    type: Boolean,
    default: true
  },
  textAlign: {
    type: String as PropType<Alignment>,
    default: 'center'
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String as PropType<Variant>,
    default: ''
  },
  color: {
    type: String,
    default: 'on-primary'
  },
  bgColor: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String as PropType<BtnSize | 'fluid' | 'auto'>,
    default: ''
  },
  radius: {
    type: String as PropType<Radius>,
    default: ''
  },
  icon: {
    type: Object as PropType<Icon>,
    default: (() => {})
  },
  iconPrepend: {
    type: Boolean,
    default: false
  },
  disableRipple: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['clicked']);

const button = ref<HTMLElement | null>(null);

const hasIcon = computed(() => props.icon && Object.keys(props.icon).length );

const appliedStyles = computed(() => {
  return [
    props.variant && `${globalConfig.prefix}--${props.variant}`,
    // props.color && `${globalConfig.prefix}--${props.color}`,
    props.size && `${globalConfig.prefix}--${props.size}`,
    props.radius && `radius-${props.radius}`,
    !props.disabled && 'hover-layer',
    props.textAlign && `${globalConfig.prefix}--text-${props.textAlign}`,
    hasIcon.value && !props.showLabel ? 'icon' : '',
    hasIcon.value && props.iconPrepend ? `${globalConfig.prefix}--icon-prepend` : ''
  ].filter(Boolean);
});

const emitValue = (ev: Event) => {
  emits('clicked', ev);
};

onMounted(() => {
  if (button.value) {
    button.value.style.setProperty('--btn-color', `var(--${globalConfig?.prefix}-${props.color})`);
    button.value.style.setProperty('--btn-bg-color', `var(--${globalConfig?.prefix}-${props.bgColor})`);
  }

});

</script>

<template>
  <button
    ref="button"
    v-ripple="disableRipple"
    :class="[`${globalConfig.prefix}-button`, ...appliedStyles]"
    :type="type"
    :disabled="disabled"
    :aria-label="label"
    @click="emitValue"
  >
    <span v-if="showLabel">{{ label }}</span>
    <AdpIcon
      v-if="!globalConfig?.customIcons && hasIcon"
      v-bind="icon"
      :size="hasIcon && !icon?.size ? 18 : icon.size"
      :aria-hidden="hasIcon && !showLabel ? true : null"
    />
    <slot
      v-if="globalConfig?.customIcons"
      name="btnIcon"
    />
  </button>
</template>

