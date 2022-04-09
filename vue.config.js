module.exports = {
    runtimeCompiler: true,
    // or
    chainWebpack: (config) => {
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js");
    },
};