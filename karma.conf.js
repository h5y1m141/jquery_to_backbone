module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      {
        pattern: 'lib/**/*.js',
        included: false
      },
      {
        pattern: 'src/**/*.js',
        included: false
      },
      {
        pattern: 'spec/**/*_spec.js',
        included: false
      },
      {
        pattern: 'node_modules/jquery/dist/jquery.js',
        included: false
      },
      {
        pattern: 'node_modules/underscore/underscore.js',
        included: false
      },
      {
        pattern: 'node_modules/backbone/backbone.js',
        included: false
      },
      'spec/require.config.js'
    ],
    // プロダクトコード用のrequire.config.jsを指定してテスト実行時には読み込まないようにする。
    exclude: [
      'src/app.js'
    ],
    preprocessors: {
    },
    reporters: ['spec', 'html'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};
