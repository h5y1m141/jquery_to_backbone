requirejs([
  'UserLibraryCollection',
  'userLibraryView'
], function(UserLibraryCollection, userLibraryView) {
  var userLibraryCollection = new UserLibraryCollection();
  $('#userLibrary').on('click', function(){
    var promise;
    promise = userLibraryCollection.fetch();
    promise.done(function(items) {
      userLibraryView.render(items);
    });
  });
});
