requirejs([
  'UserLibraryCollectionView',
  'ItemCollectionView',
  'UserLibraryCompositeView',
  'TabCollectionView'
], function(UserLibraryCollectionView, ItemCollectionView, UserLibraryCompositeView, TabCollectionView) {
  new UserLibraryCompositeView();
  new TabCollectionView();
});
