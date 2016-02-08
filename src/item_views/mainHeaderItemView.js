define([
  'marionette',
  'underscore',
  'model/item'
], function (Marionette, _, ItemModel) {
  var itemModel = new ItemModel(
    { name: 'アイテムの設定のテストです', title: 'タイトル'}
  );
  var MainHeaderItemView = Marionette.ItemView.extend({
    id: 'main-header',
    className: 'main__contents',
    template: _.template('<div>Your Template Here</div>')
  });
  return MainHeaderItemView;
});
