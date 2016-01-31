define([
  'backbone',
  'marionette',
  'item_view/item'
], function(Backbone, Marionette, ItemView) {
  var ItemCollectionView;
  ItemCollectionView = Marionette.CompositeView.extend({
    el: '.itemArea',    
    itemViewContainer: 'ul',
    collection: new Backbone.Collection([
      {name: 'テスト１', title: 'タイトル１'},
      {name: 'テスト２', title: 'タイトル２'},
      {name: 'テスト３', title: 'タイトル３'}
    ]),
    itemView: ItemView,
    template: "#list-layout"
  });
  return ItemCollectionView;
});
