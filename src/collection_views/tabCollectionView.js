define([
  'jquery',
  'marionette',
  'TabItemView'
], function($, Marionette, TabItemView) {
  var TabCollectionView = Marionette.CollectionView.extend({
    el: '.tabs',
    childView: TabItemView,
    events: {
      'click a': 'activateHandler'
    },
    initialize: function(options) {
    },
    activateHandler: function(event){
      // ページ内リンク無効化処理を以下で実施
      event.preventDefault();
      var href = $(event.target).attr('href');
      var $targetContent = $(href);
      $(this.el).find('a').removeClass('is_active');
      $(event.target).addClass('is_active');
    }
  });
  return TabCollectionView;
});
