define([
  'backbone',
  'UserLibraryModel'
],function(Backbone, UserLibraryModel) {
  var UserLibraryCollection = Backbone.Collection.extend({
    model : UserLibraryModel,
    url : 'https://gist.githubusercontent.com/h5y1m141/eb779a25ddf7dafb93ae/raw/a6f80e36f6b5e6ab4fc408660adb2728adb73609/userLibrary.json'    
  });
  return UserLibraryCollection;
});
