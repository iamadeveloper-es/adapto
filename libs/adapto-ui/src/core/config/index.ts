import { App, reactive } from 'vue';
import { Atlas } from '../themes/atlas/theme';
import { Options, ThemeOptions, Tokens } from '../themes/types';

type ConfigOptions = {
  options: Options;
  styles: {
    tokens: Tokens;
  };
}

export function useConfig() {
  const globalConfig = reactive(Atlas);


  const init = (appContext: App, options: ConfigOptions) => {
    debugger

    globalConfig.name = options.options.name || globalConfig.name;
    globalConfig.id = options.options.id || globalConfig.id;
    globalConfig.prefix = options.options.prefix || globalConfig.prefix;
    globalConfig.loadStyles = options.options.loadStyles || globalConfig.loadStyles;

    if(globalConfig.loadStyles){

      globalConfig.tokens.primitive = mergeTokens(globalConfig.tokens.primitive, options?.styles?.tokens?.primitive);
      globalConfig.tokens.semantic = mergeTokens(globalConfig.tokens.semantic, options?.styles?.tokens?.semantic);
      globalConfig.tokens.component = mergeTokens(globalConfig.tokens.component, options?.styles?.tokens?.component);

      console.log('Theme initialized with config:', globalConfig);

      appContext.config.globalProperties.$globalConfig = globalConfig;
      // debugger

      appContext.provide('globalConfig', globalConfig);

      applyTheme(globalConfig);
    }

  };

  // --- Merge tokens (soporta objetos anidados)
  const mergeTokens = (baseTokens: Record<string, any>, overrideTokens: Record<string, any>) => {
    const base = baseTokens;
    const overrides = overrideTokens || {};

    for (const key in overrides) {
      const baseVal = base[key];
      const overrideVal = overrides[key];

      base[key] =
        typeof baseVal === 'object' && typeof overrideVal === 'object'
          ? { ...baseVal, ...overrideVal }
          : overrideVal;
    }
    return base;
  };

  const applyTheme = (theme: ThemeOptions) => {
    const id = theme.id || 'adapto-theme';
    const prefix = theme.prefix;

    let styleSheet = document.getElementById(id) as HTMLStyleElement;
    // Remover hoja previa si ya existe
    if (styleSheet){
      styleSheet.remove();
    }

    styleSheet = document.createElement('style');
    styleSheet.id = id;

    // --- Aplica los estilos generados al DOM
    const css = buildCSS(prefix,theme);
    console.log('Generated CSS:\n', css);
    styleSheet.innerHTML = css;
    document.head.appendChild(styleSheet);
  };

  // --- Construye CSS completo
  const buildCSS = (prefix: string, theme: ThemeOptions) => {
    let css = ':root {\n';
    css += generatePrimitiveVars(prefix, theme.tokens.primitive);
    css += generateSemanticVars(prefix, theme.tokens.semantic);
    css += generateComponentVars(prefix, theme.tokens.component);
    css += '}\n';
    return css;
  };

  // Formatea nombres de variables CSS (reemplaza . por -)
  const formatVarName = (name: string) => name.replace(/\./g, '-');

  // --- Resuelve valores CSS, soportando referencias a tokens y arrays
  const resolveCSSValue = (prefix: string, value: string | Array<string>): string => {
    if (Array.isArray(value)) {
      return value.map(v => resolveCSSValue(prefix, v)).join(' ');
    }
    if (typeof value !== 'string') return value;

    const [prefixToken, ...rest] = value.split('.');
    const subpath = rest.join('.');

    switch (prefixToken) {
      case 'cs':
        return subpath;
      case 'pr':
      case 'sm':
        return `var(--${prefix}-${formatVarName(subpath)})`;
      default:
        return `var(--${prefix}-${formatVarName(value)})`;
    }
  };

  // --- Genera tokenes primitivos
  const generatePrimitiveVars = (prefix: string, tokens: Record<string, string | Record<string, string>>) => {
    let css = '';
    for (const [token, value] of Object.entries(tokens)) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        for (const [subToken, subValue] of Object.entries(value)) {
          css += `  --${prefix}-${token}-${subToken}: ${subValue};\n`;
        }
      } else {
        css += `  --${prefix}-${token}: ${value};\n`;
      }
    }
    return css;
  };

  // --- Genera tokenes semánticos (con soporte para cs. + arrays)
  const generateSemanticVars = (prefix: string, tokens: Record<string, string | string[]>) => {
    let css = '';
    for (const [token, value] of Object.entries(tokens)) {
      css += `  --${prefix}-${token}: ${resolveCSSValue(prefix, value)};\n`;
    }
    return css;
  };

  // --- Genera tokenes de componentes (con soporte para cs. + arrays)
  const generateComponentVars = (prefix: string, tokens: Record<string, string | Record<string, string | string[]>>) => {
    let css = '';
    for (const [component, compTokens] of Object.entries(tokens)) {
      for (const [token, value] of Object.entries(compTokens)) {
        css += `  --${prefix}-${component}-${token}: ${resolveCSSValue(prefix, value)};\n`;
      }
    }
    return css;
  };

  return {
    init
  };
}
