define([
  'backbone',
  'UserLibraryModel',
  'UserLibraryCollection'
], function(Backbone, UserLibraryModel, UserLibraryCollection) {
  var UserLibraryView = Backbone.View.extend({
    el: '#userLibrary',
    events: {
      'click': 'fetch'
    },    
    model: UserLibraryModel,
    collection: UserLibraryCollection,
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
    render: function(collection, response) {
      var result = [],
          $dataArea = $('.dataArea'),
          template = $('#userLibraryView').html(),
          compiled = _.template(template);
      return $dataArea.append(compiled({
        items: collection.map(function(model){
          return model.attributes;
        })
      }));
    }
  });
  return UserLibraryView;
});
