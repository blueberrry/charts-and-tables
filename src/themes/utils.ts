export function applyTheme(theme: any) {
  // TODO: Types
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  primary100,
  primary400,
  primary700,
  secondary100,
  secondary400,
  secondary700,
  success100,
  success400,
  success700,
  error100,
  error400,
  error700,
  info100,
  info400,
  info700,
  warning100,
  warning400,
  warning700,
  body100,
  body400,
  body700,
}: any) {
  // TODO: Types
  return {
    '--theme-primary-100': primary100,
    '--theme-primary-400': primary400,
    '--theme-primary-700': primary700,

    '--theme-secondary-100': secondary100,
    '--theme-secondary-400': secondary400,
    '--theme-secondary-700': secondary700,

    '--theme-success-100': success100,
    '--theme-success-400': success400,
    '--theme-success-700': success700,

    '--theme-error-100': error100,
    '--theme-error-400': error400,
    '--theme-error-700': error700,

    '--theme-info-100': info100,
    '--theme-info-400': info400,
    '--theme-info-700': info700,

    '--theme-warning-100': warning100,
    '--theme-warning-400': warning400,
    '--theme-warning-700': warning700,

    '--theme-body-100': body100,
    '--theme-body-400': body400,
    '--theme-body-700': body700,
  };
}
