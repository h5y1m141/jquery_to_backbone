requirejs([
  'UserLibraryCollectionView',
  'collection_view/item',
  'composite_views/userLibrary'
], function(UserLibraryCollectionView, ItemCollectionView, UserLibraryCompositeViews) {
  // new UserLibraryCollectionView();
  new UserLibraryCompositeViews();
});
