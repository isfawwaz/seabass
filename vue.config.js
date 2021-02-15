module.exports = {
    pwa: {
        name: 'eFishery Seabass',
        themeColor: '#2ab796',
        msTileColor: '#FFFFFF',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'dev/sw.js',
            // ...other Workbox options...
        }
    }
}