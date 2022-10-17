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
  neutral100,
  neutral400,
  neutral700,
  highlight100,
  highlight400,
  highlight700,
  success,
  error,
  info,
  warning,
  body100,
  body400,
  body700,
  bodyInverse,
}: any) {
  // TODO: Types
  return {
    '--theme-primary-100': primary100,
    '--theme-primary-400': primary400,
    '--theme-primary-700': primary700,

    '--theme-secondary-100': secondary100,
    '--theme-secondary-400': secondary400,
    '--theme-secondary-700': secondary700,

    '--theme-neutral-100': neutral100,
    '--theme-neutral-400': neutral400,
    '--theme-neutral-700': neutral700,

    '--theme-highlight-100': highlight100,
    '--theme-highlight-400': highlight400,
    '--theme-highlight-700': highlight700,

    '--theme-success': success,

    '--theme-error': error,

    '--theme-info': info,

    '--theme-warning': warning,

    '--theme-body-100': body100,
    '--theme-body-400': body400,
    '--theme-body-700': body700,
    '--theme-body-inverse': bodyInverse,
  };
}
