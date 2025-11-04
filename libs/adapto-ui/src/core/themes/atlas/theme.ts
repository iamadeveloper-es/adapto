import { ThemeOptions } from '../types';


export const Atlas: ThemeOptions = {
  name: 'Atlas',
  id: 'adapto-theme',
  prefix: 'adapto',
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
      size: {
        sm: '8px',
        md: '16px',
        lg: '24px'
      },
      spacing: {
        sm: '4px',
        md: '8px',
        lg: '16px'
      }
    },
    semantic: {
      'primary': 'green.100',
      'secondary': 'blue.500',
      'background': 'white',
      'on-background': 'black',
      'on-primary': 'white',
      'on-secondary': 'white',
      'spacing-block': ['cs.10px', 'size.lg'],
    },
    component: {
      btn: {
        'bg': 'sm.primary',
        'color': 'sm.on-primary',
        'disabled': 'pr.white',
        'padding': 'pr.size.md',
        'line-height': 'cs.1px',
        'margin-y': ['pr.size.sm', 'pr.size.lg']
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
