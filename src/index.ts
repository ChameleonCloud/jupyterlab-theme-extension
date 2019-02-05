// Original work Copyright (c) Jupyter Development Team.
// Modified work Copyright (c) University of Chicago.
// Distributed under the terms of the Modified BSD License.

import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Chameleon Theme.
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@chameleoncloud/jupyterlab-theme-extension:plugin',
  requires: [IThemeManager],
  activate: function(_: JupyterLab, manager: IThemeManager) {
    const style = '@chameleoncloud/jupyterlab-theme-extension/index.css';

    manager.register({
      name: 'Chameleon',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
