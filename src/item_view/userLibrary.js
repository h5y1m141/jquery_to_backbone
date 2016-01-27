define([
  'backbone',
  'marionette',  
  'UserLibraryModel'
], function(Backbone, Marionette, UserLibraryModel) {
  var UserLibraryItemView = Marionette.ItemView.extend({
    model: UserLibraryModel,
    template: '#userLibrariyTemplate'
  });
  return UserLibraryItemView;
});
