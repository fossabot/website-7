const { injectBabelPlugin } = require('react-app-rewired')
const { rewireEmotion } = require('react-app-rewire-emotion')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint,
} = require('react-app-rewire-typescript-babel-preset')

module.exports = {
  webpack: function(config, env) {
    config = injectBabelPlugin('polished', config)
    config = rewireTypescript(config)
    config = rewireTSLint(config /* {} - optional tslint-loader options */)

    if (env === 'production' || env === 'test') {
      config = rewireEmotion(config, env, { hoist: true })
    } else {
      config = rewireEmotion(config, env, { autoLabel: true, sourceMap: true })
    }

    return {
      ...config,
      ...(env === 'development' ? { devtool: 'source-map' } : {}),
      plugins: [
        ...config.plugins,
        ...(env === 'production'
          ? [
              new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
                reportFilename: 'bundle-report.html',
              }),
            ]
          : []),
      ],
    }
  },

  // When using jest, the code is not compiled via webpack. Any changes made to
  // webpack's babel config above (here: rewiring babel-plugin-emotion) will
  // not be applied when running tests in jest.
  // In order to load babel plugins/presets during testing, an external .babelrc
  // configuration file is set up, targetting the "test" environment.
  jest: function(config) {
    return rewireTypescriptJest(config)
  },
}
