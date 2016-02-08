define([
  'jquery',
  'marionette'
], function ($, Marionette) {
  var TabItemView = Marionette.ItemView.extend({
    template: '#tab',
    tagName: 'li',
    className: 'tab__list'
  });
  return TabItemView;
});
