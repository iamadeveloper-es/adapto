export type Options = {
  prefix?: string;
  name?: string;
  id?: string;
  darkModeSelector?: string;
  loadStyles?: boolean;
}

export type Tokens = {
  primitive: Record<string, string | Record<string, string>>;
  semantic: Record<string, string | string[]>;
  component: Record<string, string | Record<string, string | string[]>>;
}

export type Modes = {
  light: {
    semantic: Record<string, string | string[]>;
  };
  dark: {
    semantic: Record<string, string | string[]>;
  };
}

export type ThemeOptions = {
  name: string;
  id: string;
  prefix: string;
  darkModeSelector?: string;
  loadStyles: boolean;
  tokens: Tokens;
  modes: Modes;
};
