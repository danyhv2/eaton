module.exports = {
  repository: {
    type: 'git',
    url: 'https://github.com/Razorfish-Central/sr_eaton'
  },
  // srcFolder: './src',
  paths: {
    src: {
      js: './src/js',
      scss: './src/scss'
    },

    destAEM: {
      js:  '../eaton.ui.static/src/main/content/jcr_root/etc/designs/eaton-static/clientlib-static/js',
      css: '../eaton.ui.static/src/main/content/jcr_root/etc/designs/eaton-static/clientlib-static/css'
    }

  },

  // AEM Project Folders for AEMSync Task
  aemBundles: [
    '../eaton.ui.static/src/main/content/jcr_root'
  ]

}
