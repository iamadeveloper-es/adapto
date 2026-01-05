import { getCurrentInstance, inject, onUnmounted, ref } from "vue";
import { ThemeOptions } from "../themes/types";
import { pushStyle } from "../styles/styleStackHandler";

export function useComponentHandler() {
  const globalConfig = inject('globalConfig') as ThemeOptions;
  const instance = getCurrentInstance();
  const styleId = ref<string | null>(null);


  const handleConfig = (name: string, css?: string) => {

    if(!css) return;
    const cssComponent = css.replace(/__PREFIX__/g, globalConfig.prefix)
    styleId.value = `${globalConfig.id}-${name}`;
    pushStyle(styleId.value, cssComponent);
  }

  onUnmounted(() => {
    // removeStyle(styleId.value);
  });

  return { handleConfig, globalConfig };
}

function removeStyle(id: string | null) {
  if(!id) return;
  const styleElement = document.getElementById(id);
  if (styleElement) {
    styleElement.remove();
  }
}
