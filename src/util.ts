import type { App, Plugin } from "vue";
export const withInstall = <T>(component: T) => {
  const cpn = component as any;
  cpn.install = function (app: App) {
    app.component(cpn.displayName || cpn.name, component as any);
  };
  return component as T & Plugin;
};
