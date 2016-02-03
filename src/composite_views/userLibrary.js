define([
  'backbone',
  'marionette',
  'UserLibraryCollection',
  'UserLibraryItemView',
  'item_views/rowView'
], function(Backbone, Marionette, UserLibraryCollection, UserLibraryItemView, RowView) {
  var UserLibraryCompositeView;
  UserLibraryCompositeView = Marionette.CompositeView.extend({
    el: '#main',
    childView: RowView,
    childViewContainer: '.contents',
    collection: UserLibraryCollection,
    template: "#table-template",
    events: {
      'click #userLibrary': 'fetch'
    },
    initialize: function(options) {
      this.collection = new UserLibraryCollection();
    },
    fetch: function() {
      console.log('composit view load');
      var _this = this;
      this.collection.fetch({
        dataType : 'json',
        success: $.proxy(this.render, this)
        // success : function(){
        //   console.log(_this);
        //   console.log($);
        //   $.proxy(_this.render, _this);
        // }
      });
    },
    childViewOptions: function(model, index) {
      console.log(index);
    }
  });
  return UserLibraryCompositeView;
});
