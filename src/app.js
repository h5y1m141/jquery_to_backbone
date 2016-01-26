requirejs.config({
  paths: {
    'jquery': '../node_modules/jquery/dist/jquery',
    'underscore': '../node_modules/underscore/underscore-min',
    'userLibrary': 'userLibrary',
    'userLibraryModel': 'model/userLibrary'
  },
  shim: {
    'userLibrary': {
      deps: ['underscore', 'jquery'],
      exports: 'userLibrary'
    }
  }
});
requirejs(['userLibrary']);
