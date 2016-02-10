define([ 
  'marionette',
  'MainLayoutView',
  'MainHeaderItemView'
], function (Marionette, MainLayoutView, MainHeaderItemView) {
  var UserController = (function(){
    var mainLayoutView = new MainLayoutView(),
        headerItemView = new MainHeaderItemView();
    var render = function(){
      mainLayoutView.render();
      mainLayoutView.headerRegion.show(new MainHeaderItemView());
    };
    return {
      render: render
    };
  })();
  return UserController;
});
