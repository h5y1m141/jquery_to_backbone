requirejs([
  'UserLibraryCollectionView',
  'collection_view/item'
], function(UserLibraryCollectionView, ItemCollectionView) {
  new UserLibraryCollectionView();
  var view = new ItemCollectionView();
  view.fetch();
});
