module.exports = {
    chainWebpack: (config) => {
        // const svgRule = config.module.rule('svg');

        // svgRule.uses.clear();

        // svgRule
        //     .use('babel-loader')
        //     .loader('babel-loader')
        //     .end()
        //     .use('vue-svg-loader')
        //     .loader('vue-svg-loader');
        config.module
            .rule("vue")
            .use("vue-svg-inline-loader")
                .loader("vue-svg-inline-loader")
    },
    pwa: {
        name: 'eFishery Seabass',
        themeColor: '#2ab796',
        msTileColor: '#2ab796',
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