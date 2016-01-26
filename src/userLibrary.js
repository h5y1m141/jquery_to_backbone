requirejs([
  'userLibraryModel',
  'userLibraryView'
], function(userLibraryModel, userLibraryView) {
  $('#userLibrary').on('click', function(){
    var promise;
    promise = userLibraryModel.fetch();
    promise.done(function(data) {
      var items = JSON.parse(data);
      userLibraryView.render(items);
    });
  });
});
