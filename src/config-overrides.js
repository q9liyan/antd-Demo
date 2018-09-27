module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import',{ libraryName: 'antd', libraryDirectory: 'es', style: 'true'}],
        config
    );
    confit = reewireLess.withLoaderOptions({
        modifyVars:{ "@primary-color": "#1DA57A"},
        javascriptEnabled:true,
    })(config, env);
    return config;
};
