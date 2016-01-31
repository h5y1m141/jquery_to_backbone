define([
  'backbone',
  'marionette',  
  'UserLibraryModel'
], function(Backbone, Marionette, UserLibraryModel) {
  var UserLibraryItemView = Marionette.ItemView.extend({
    model: UserLibraryModel,
    template: '#itemTemplate',
    tagName: 'li'
  });
  return UserLibraryItemView;
});
