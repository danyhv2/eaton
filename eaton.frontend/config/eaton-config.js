module.exports = {
  repository: {
    type: 'git',
    url: 'https://github.com/Razorfish-Central/sr_eaton'
  },
  // srcFolder: './src',
  paths: {
    src: {
      global:       './src/global',
      components:   {
        content: '../eaton.ui.apps.html/src/main/content/jcr_root/apps/eaton/html-components/content',
        structure: '../eaton.ui.apps.html/src/main/content/jcr_root/apps/eaton/html-components/structure',
      }
    },

    destAEM: {
      global:       '../eaton.ui.apps.html/src/main/content/jcr_root/etc/designs/eaton-static/clientlibs/global',
      components:   '../eaton.ui.apps.html/src/main/content/jcr_root/etc/designs/eaton-static/clientlibs/components'
    }

  },

  // Bundles Folders for AEMSync Task
  aemBundles: [
    '../eaton.ui.apps.html/src/main/content/jcr_root'
  ]
}
