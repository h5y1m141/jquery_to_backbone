requirejs([
  'TabCollectionView',
  'MainLayoutView',
  'MainHeaderItemView'
], function(TabCollectionView, MainLayoutView, MainHeaderItemView) {
  var tabCollectionView = new TabCollectionView(),
      mainLayoutView = new MainLayoutView(),
      headerItemView = new MainHeaderItemView();
  tabCollectionView.render();
  mainLayoutView.render();
  mainLayoutView.headerRegion.show(headerItemView);
});
