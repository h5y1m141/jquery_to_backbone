requirejs.config({
  paths: {
    'jquery': '../node_modules/jquery/dist/jquery',
    'underscore': '../node_modules/underscore/underscore-min',
    'userLibrary': 'userLibrary'
  },
  shim: {
    'userLibrary': {
      deps: ['underscore', 'jquery'],
      exports: 'userLibrary'
    }
  }
});
requirejs(['userLibrary']);
