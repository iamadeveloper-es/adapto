type StyleEntry = {
  id: string;
  css: string;
};

const styleStack: StyleEntry[] = [];


function syncHead() {
  if (typeof document === 'undefined') return;

  const head = document.head;

  // eliminar estilos antiguos del stack
  styleStack.forEach(({ id, css }) => {
    let style = document.getElementById(id) as HTMLStyleElement | null;

    if (!style) {
      style = document.createElement('style');
      style.id = id;
      head.appendChild(style);
    }

    style.textContent = css;
  });
}

export function pushStyle(id: string, css: string) {
  const index = styleStack.findIndex(s => s.id === id);

  if (index !== -1) {
    styleStack[index].css = css; // reemplazo
  } else {
    styleStack.push({ id, css });
  }

  syncHead();
}
