define([
  'backbone'
],function(Backbone) {
  var itemModel = Backbone.Model.extend({
    defaults :  {
      name : null,
      title : null
    }    
  });
  return itemModel;
});
