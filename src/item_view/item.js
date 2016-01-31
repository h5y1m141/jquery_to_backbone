define([
  'backbone',
  'marionette',
  'model/item'
], function(Backbone, Marionette, itemModel) {
  var ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: '#itemAreaTemplate',
    model: itemModel
  });
  return ItemView;
});
