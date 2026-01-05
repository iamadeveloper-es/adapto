<script setup>
import { computed } from 'vue';
import * as icons from "lucide-vue-next";
import { useComponentHandler } from '../../core/utils/useComponentHandler';

const { handleConfig, globalConfig } = useComponentHandler()

handleConfig('Icon');

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 24
  },
  color: {
    type: String,
    default: ''
  },
  strokeWidth: {
    type: Number,
    default: 2
  },
  defaultClass: {
    type: [String, null],
    default: null
  },
});

const icon = computed(() => {
  const nameToString = [props.name].toString();
  const formatedName = nameToString.split('-').map(item => item.charAt(0).toUpperCase() + item.substring(1)).join('')
  return icons[formatedName];
});
</script>

<template>
  <component
    :is="icon"
    :class="globalConfig.prefix"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>
