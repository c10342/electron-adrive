export const openPage = (path: string, options?: { title?: string }) => {
  const url = `${window.location.origin}/#${path}`;
  window.api.openWindown({ url, ...(options ?? {}) });
};
