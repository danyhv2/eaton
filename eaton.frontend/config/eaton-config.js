module.exports = {
  repository: {
    type: 'git',
    url: 'https://github.com/Razorfish-Central/sr_eaton'
  },

  paths: {
    srcRoot: './src',
    src: {
      // global: './src/components',
      // components: './src/global'
    },

    destAEM: {
      // global: '../eaton.ui.static/src/main/content/jcr_root/etc/designs/eaton-static/clientlib-static/global',
      // components: '../eaton.ui.static/src/main/content/jcr_root/etc/designs/eaton-static/clientlib-static/components'
      clientlibStatic: '../eaton.ui.static/src/main/content/jcr_root/etc/designs/eaton-static/clientlib-static'
    }

  },

  // AEM Project Folders for AEMSync Task
  aemBundles: [
    '../eaton.ui.static/src/main/content/jcr_root'
  ]

}
