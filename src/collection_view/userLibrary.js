define([
  'backbone',
  'marionette',
  'UserLibraryCollection',
  'UserLibraryItemView'
], function(Backbone, Marionette, UserLibraryCollection, UserLibraryItemView) {
  var UserLibraryCollectionView;
  UserLibraryCollectionView = Marionette.CollectionView.extend({
    el: '.dataArea',
    tagName: 'ul',    
    childView: UserLibraryItemView,
    collection: UserLibraryCollection,
    events: {
      'click #userLibrary': 'fetch'
    },
    initialize: function(options) {
      this.collection = new UserLibraryCollection();
      this.listenTo(this.collection, 'change', this.fetch);
    },
    fetch: function() {
      this.collection.fetch({
        dataType : 'json',
        success : $.proxy(this.render, this)
      });
    },
    childViewOptions: function(model, index) {
      console.log(model);
    }
  });
  return UserLibraryCollectionView;
});
