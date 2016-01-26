define([
  'backbone'
],function(Backbone) {
  var UserLibraryModel = Backbone.Model.extend({
    defaults : function() {
      return {
        'data' : {
          'path' : null,
          'description' : null
        }
      };
    }    
  });
  return UserLibraryModel;
});
