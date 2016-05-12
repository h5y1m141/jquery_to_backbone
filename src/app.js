requirejs.config({
  paths: {
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore-min',
    backbone: '../node_modules/backbone/backbone',
    marionette: '../node_modules/backbone.marionette/lib/backbone.marionette',
    bootstrap: '../node_modules/bootstrap/dist/js/bootstrap.min',
    userLibrary: 'userLibrary',
    UserLibraryView: 'view/userLibrary',
    UserLibraryModel: 'model/userLibrary',
    UserLibraryCompositeView: 'composite_views/userLibrary',    
    UserLibraryCollection: 'collection/userLibrary',
    UserLibraryCollectionView: 'collection_views/userLibrary',
    ItemCollectionView: 'collection_views/item',
    TabCollectionView: 'collection_views/tabCollectionView',
    UserLibraryItemView: 'item_views/userLibrary',
    TabItemView: 'item_views/tabItemView',
    MainHeaderItemView: 'item_views/mainHeaderItemView',
    HeaderView: 'item_views/headerView',
    MainLayoutView: 'layout_views/mainLayoutView',
    UserController: 'controller/user',
    Router: 'routers/route'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']      
    }
  }
});
requirejs(['userLibrary', 'main']);
