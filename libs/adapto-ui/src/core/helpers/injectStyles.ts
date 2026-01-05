export const injectStyle = (theme: any, css: string) => {

  if (typeof document === 'undefined') return; // SSR guard

  const id = `${theme.id}-base` || 'css-compiler-theme-base';
  let styleSheet = document.getElementById(id) as HTMLStyleElement | null;

  if (styleSheet){
    styleSheet.remove();
  }

  styleSheet = document.createElement('style');
  styleSheet.id = id;
  document.head.appendChild(styleSheet);

  styleSheet.textContent = css;

}
