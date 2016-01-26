requirejs([
  'UserLibraryView'
], function(UserLibraryView) {
  var userLibraryView = new UserLibraryView();
  $('#userLibrary').on('click', function(){
    userLibraryView.render();
  });
});
