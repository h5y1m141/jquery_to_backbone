define([
  'backbone',
  'UserLibraryModel',
  'UserLibraryCollection'
], function(Backbone, UserLibraryModel, UserLibraryCollection) {
  var UserLibraryView = Backbone.View.extend({
    el: '#userLibrary',
    model: UserLibraryModel,
    collection: UserLibraryCollection,
    initialize: function(options) {
      _.bindAll(this, 'render');
      this.reset();
    },
    reset: function() {
      this.collection = new UserLibraryCollection();
    },
    render: function() {
      this.collection.fetch({
        dataType : 'json',
        success : $.proxy(this.add, this)
      });
    },
    add: function(collection, response) {
      var result = [],
          $dataArea = $('.dataArea'),
          template = $('#userLibraryView').html(),
          compiled = _.template(template);
      console.log('add start');
      return $dataArea.append(compiled({
        items: collection.map(function(model){
          return model.attributes;
        })
      }));
    }
  });
  return UserLibraryView;
});
