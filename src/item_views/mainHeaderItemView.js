define([
  'marionette',
  'underscore',
  'model/item'
], function (Marionette, _, ItemModel) {
  var itemModel = new ItemModel(
    { name: 'アイテムの設定のテストです', title: 'タイトル'}
  );
  var MainHeaderItemView = Marionette.ItemView.extend({
    className: 'main__contents',
    model: itemModel,
    template: "#main-header-template"
  });
  return MainHeaderItemView;
});
