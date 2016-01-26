requirejs.config({
  paths: {
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore-min',
    userLibrary: 'userLibrary',
    userLibraryModel: 'model/userLibrary',
    userLibraryView: 'view/userLibrary'
  }
});
requirejs(['userLibrary']);
