define([
  'jquery',
  'marionette',
  'backbone',
  'TabItemView',
  'UserController'
], function($, Marionette, Backbone, TabItemView, UserController) {
  var TabCollectionView = Marionette.CollectionView.extend({
    el: '#tabs',
    childView: TabItemView,
    events: {
      'click a': 'activateHandler'
    },
    initialize: function(options) {
      var tabs = [
            { href: 'mypage',  tabName: 'マイページ' },
            { href: 'account', tabName: 'アカウント編集' }
          ];
      this.collection = new Backbone.Collection(tabs);
      this.userController = UserController;
    },
    activateHandler: function(event){
      // ページ内リンク無効化処理を以下で実施
      event.preventDefault();
      var href = $(event.target).attr('href');
      var $targetContent = $(href);
      $(this.el).find('a').removeClass('is_active');
      $(event.target).addClass('is_active');
      this.userController.render();
    }
  });
  return TabCollectionView;
});
