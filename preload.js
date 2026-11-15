const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // window controls
  minimize: () => ipcRenderer.send('win-minimize'),
  close: () => ipcRenderer.send('win-close'),
  quit: () => ipcRenderer.send('win-quit'),

  // profiles
  loadProfiles: () => ipcRenderer.invoke('load-profiles'),
  saveProfiles: (profiles) => ipcRenderer.invoke('save-profiles', profiles),

  // settings
  loadSettings: () => ipcRenderer.invoke('load-settings'),
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
  chooseCorePath: () => ipcRenderer.invoke('choose-core-path'),
  bundledCoreInfo: () => ipcRenderer.invoke('bundled-core-info'),

  // core control
  startCore: (payload) => ipcRenderer.invoke('start-core', payload),
  stopCore: () => ipcRenderer.invoke('stop-core'),
  coreStatus: () => ipcRenderer.invoke('core-status'),
  tunnelPing: (httpPort) => ipcRenderer.invoke('tunnel-ping', httpPort),

  // system proxy
  setSystemProxy: (opts) => ipcRenderer.invoke('set-system-proxy', opts),
  unsetSystemProxy: () => ipcRenderer.invoke('unset-system-proxy'),

  // ping & subscription
  pingProfile: (profile) => ipcRenderer.invoke('ping-profile', profile),
  fetchSubscription: (url) => ipcRenderer.invoke('fetch-subscription', url),

  // external
  openExternal: (url) => ipcRenderer.invoke('open-external', url),

  // events from main
  onForceDisconnected: (cb) => ipcRenderer.on('force-disconnected', cb),
  onCoreLog: (cb) => ipcRenderer.on('core-log', (_e, text) => cb(text)),
  onCoreExit: (cb) => ipcRenderer.on('core-exit', (_e, code) => cb(code)),
});
