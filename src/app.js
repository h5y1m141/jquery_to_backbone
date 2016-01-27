requirejs.config({
  paths: {
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore-min',
    backbone: '../node_modules/backbone/backbone',
    marionette: '../node_modules/backbone.marionette/lib/backbone.marionette',
    userLibrary: 'userLibrary',
    UserLibraryView: 'view/userLibrary',
    UserLibraryModel: 'model/userLibrary',
    UserLibraryCollection: 'collection/userLibrary',
    UserLibraryItemView: 'item_view/userLibrary',
    UserLibraryCollectionView: 'collection_view/userLibrary'
  }
});
requirejs(['userLibrary']);
