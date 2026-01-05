import { ThemeOptions } from '../types';


export const Atlas: ThemeOptions = {
  name: 'Atlas',
  id: 'adapto-theme',
  prefix: 'adp',
  darkModeSelector: 'dark-mode',
  loadStyles: true,
  tokens: {
    primitive:{
      'white': '#ffffff',
      'black': '#000000',
      green: {
        100: '#d9feeab1',
        500: '#8fefbaff'
      },
      blue: {
        500: '#3b82f6ff',
        700: '#1e40afff'
      },
      red: {
        500: '#ef4444',
        700: '#b91c1c',
      },
      yellow: {
        500: '#facc15',
        700: '#a16207',
      },
      purple: {
        500: '#a855f7',
        700: '#6b21a8',
      },
      pink: {
        500: '#ec4899',
        700: '#be185d',
      },
      gray: {
        200: '#d9d9d9ff',
        300: '#c4c4c4ff',
        400: '#9e9e9e',
        500: '#6b7280',
        700: '#374151',
        900: '#282f3bff',
      },
      orange: {
        500: '#f97316',
        700: '#c2410c',
      },
      teal: {
        500: '#14b8a6',
        700: '#0f766e',
      },
      indigo: {
        500: '#6366f1',
        700: '#4338ca',
      },
      size: {
        sm: '8px',
        md: '16px',
        lg: '24px'
      },
      spacing: {
        'xs': '0.25rem', //4px
        '2xs': '0.3rem', //4.8px
        'sm': '0.5rem', //8px
        'md': '0.75rem', //12px
        '2md': '0.875rem', //14px
        'lg': '1rem', //16px
        'xl': '2rem', //32px
        'xxl': '3.438rem', //55px
      },
      radius: {
        'xs':   '0.188rem', //3px
        'sm':   '0.313rem', //5px
        'md':   '0.5rem', //8px
        'lg':   '0.75rem', //12px
        'xl':   '1.563rem', //25px
        'full': '9999px',
      },
      'text-spacing': {
        md: '1.4',
      },
      'text-size': {
        xs: '0.75rem', //12px
        sm: '0.875rem', //14px
        md: '1rem', //16px
        lg: '1.125rem', //18px
        xl: '1.25rem', //20px
        xxl: '1.5rem', //24px
      },
      'width-full': '100%',
      'height-full': '100%',
    },
    semantic: {
      'primary': 'blue.500',
      'secondary': 'green.500',
      'surface': 'gray.500',
      'surface-light': 'gray.400',
      'surface-lighter': 'gray.300',
      'surface-extra-lighter': 'gray.200',
      'surface-dark': 'gray.500',
      'surface-extra-dark': 'gray.700',
      'surface-darker': 'gray.900',
      'background': 'white',
      'info': 'blue.500',
      'success': 'teal.500',
      'warning': 'yellow.500',
      'danger': 'red.500',
      'disabled': 'gray.400',
      //Adaptative mode
      'on-primary': 'white',
      'on-secondary': 'white',
      'on-surface': 'white',
      'on-background': 'black',
      'on-info': 'white',
      'on-success': 'gray.700',
      'on-warning': 'gray.700',
      'on-danger': 'white',
      'on-disabled': 'white',

      'secondary-on-hover': 'green.100',
      // 'spacing-block': ['cs.10px', 'size.lg'],

      //Text
      'text-primary': 'black',
      'text-secondary': 'gray.500',
      'text-disabled': 'gray.400',
      'text-inverse': 'white',

      //Borders
      'border': 'gray.200',
      'border-medium': 'gray.300',
      'border-strong': 'gray.500',

      //Tipography
      'heading-xs': 'text-size.md',
      'heading-sm': 'text-size.lg',
      'heading-md': 'text-size.xl',
      'heading-lg': 'text-size.xxl', // 24px

      'text-extra-small': 'text-size.xs',
      'text-small': 'text-size.sm',
      'text-medium': 'text-size.md',
      'text-large': 'text-size.lg',
      'text-extra-large': 'text-size.xl',

      'body-sm': 'text-size.sm',
      'body-md': 'text-size.md',
      'body-lg': 'text-size.lg',

      'text-spacing': 'text-spacing.md',

      //Spacing
      'spacing-inline': 'spacing.lg',
      'spacing-block': 'spacing.lg',
      'spacing-extra-small': 'spacing.xs',
      'spacing-super-small': 'spacing.2xs',
      'spacing-small': 'spacing.sm',
      'spacing-medium': 'spacing.md',
      'spacing-super-medium': 'spacing.2md',
      'spacing-large': 'spacing.lg',
      'spacing-extra-large': 'spacing.xl',
      'spacing-section': 'spacing.xxl',

      //Radius
      'radius-extra-small': 'radius.xs',
      'radius-small': 'radius.sm',
      'radius-medium': 'radius.md',
      'radius-large': 'radius.lg',
      'radius-extra-large': 'radius.xxl',
      'round': 'radius.full',

      'full-size': 'width-full',
      'full-height': 'height-full',
    },
    component: {
      btn: {
        // 'bg': 'sm.primary',
        // 'color': 'sm.on-primary',
        // 'disabled': 'pr.white',
        // 'padding': 'pr.size.md',
        // 'line-height': 'cs.1px',
        // 'margin-y': ['pr.size.sm', 'pr.size.lg'],
        'padding': ['sm.spacing-extra-small', 'sm.spacing-medium'],
        'line-height': 'sm.text-spacing',
        'disabled': 'sm.disabled',
        'on-disabled': 'sm.on-disabled',
        'surface': 'sm.surface',
        'on-surface': 'sm.on-surface',
        'info': 'sm.info',
        'on-info': 'sm.on-info',
        'success': 'sm.success',
        'on-success': 'sm.on-success',
        'warning': 'sm.warning',
        'on-warning': 'sm.on-warning',
        'danger': 'sm.danger',
        'on-danger': 'sm.on-danger',
      }
    }
  },
  modes: {
    light: {
      semantic: {}
    },
    dark: {
      semantic: {
        'primary': 'blue-700',
        'secondary': 'green-500',
        'background': 'gray-900',
        'surface': 'gray-700',
      }
    }
  }
};
