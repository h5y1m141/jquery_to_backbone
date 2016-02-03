define([
  'backbone',
  'marionette'
], function(Backbone, Marionette) {
  var RowView = Marionette.ItemView.extend({
    template: '#row-template',
    tagName: 'tr'
  });
  return RowView;
});
