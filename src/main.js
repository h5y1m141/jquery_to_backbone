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
  console.log(mainLayoutView.header);
  console.log(mainLayoutView.header.show(headerItemView));
  mainLayoutView.header.show(headerItemView);
});
