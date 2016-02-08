define([
  'marionette'
], function (Marionette) {
  var TabItemView = Marionette.ItemView.extend({
    template: '#header',
    className: 'tab__list'
  });
  return TabItemView;
});
