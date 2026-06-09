export const RGRM_ROOT_CLASS = 'rgrm-root';

type ClassListLike = {
  add(className: string): void;
  remove(className: string): void;
};

type DocumentLike = {
  documentElement: { classList: ClassListLike };
  body: { classList: ClassListLike } | null;
};

let rootMountCount = 0;

function getDocument(): DocumentLike | undefined {
  const global = globalThis as { document?: DocumentLike };
  return global.document;
}

/** Add `rgrm-root` to `<html>` and `<body>`. Safe to call multiple times (ref-counted). */
export function applyRootDocumentClasses(): void {
  const document = getDocument();
  if (!document?.body) {
    return;
  }

  rootMountCount += 1;

  if (rootMountCount === 1) {
    document.documentElement.classList.add(RGRM_ROOT_CLASS);
    document.body.classList.add(RGRM_ROOT_CLASS);
  }
}

/** Remove `rgrm-root` when the last Root instance unmounts. */
export function removeRootDocumentClasses(): void {
  const document = getDocument();
  if (!document?.body) {
    return;
  }

  rootMountCount = Math.max(0, rootMountCount - 1);

  if (rootMountCount === 0) {
    document.documentElement.classList.remove(RGRM_ROOT_CLASS);
    document.body.classList.remove(RGRM_ROOT_CLASS);
  }
}
