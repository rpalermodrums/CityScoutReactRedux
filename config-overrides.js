/* eslint-disable no-param-reassign */
const { injectBabelPlugin } = require('react-app-rewired')
  , rewireReactHotLoader = require('react-app-rewire-hot-loader')
  , rewireLess = require('react-app-rewire-less');

module.exports = function override (config, env) {
  config = rewireReactHotLoader(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: false, libraryDirectory: 'es' }], config);
  config = injectBabelPlugin(['lodash', {}], config);

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
  })(config, env);

  return config;
};
