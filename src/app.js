requirejs.config({
  paths: {
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore-min',
    backbone: '../node_modules/backbone/backbone',    
    userLibrary: 'userLibrary',
    UserLibraryView: 'view/userLibrary',
    UserLibraryModel: 'model/userLibrary',
    UserLibraryCollection: 'collection/userLibrary'
  }
});
requirejs(['userLibrary']);
