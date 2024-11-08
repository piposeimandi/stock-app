const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Stock App',
    themeColor: '#42b883',
    msTileColor: '#ffffff',
    manifestOptions: {
      start_url: '.',
      display: 'standalone'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  }
})
