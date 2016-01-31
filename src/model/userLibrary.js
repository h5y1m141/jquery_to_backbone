define([
  'backbone'
],function(Backbone) {
  var UserLibraryModel = Backbone.Model.extend({
    defaults :  {
      path : null,
      description : null
    }    
  });
  return UserLibraryModel;
});
