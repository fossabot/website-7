const { rewireEmotion } = require('react-app-rewire-emotion')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  webpack: function(config, env) {
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
}
