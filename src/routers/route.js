define([
  'backbone',
  'marionette',
], function(Backbone, Marionette) {
  var MyAppController = Marionette.Object.extend({
		initialize: function () {
      mixpanel.track('initialize');
			console.log('initialize');
		},
    save: function(){
      mixpanel.track('save');
      console.log('save');
    },
    scroll: function(sectionID){
      var showMessage = function(sectionID, callback){
        mixpanel.track('scroll');
        console.log('sectionIDは' + sectionID);
        callback();
      };
      showMessage(sectionID, function(){
        Backbone.history.navigate('#/save');
      });
    },
    multiaction: function(){
      console.log('何かの処理を行う');
      Backbone.history.navigate('#/save');
    }
  });
  var controller = new MyAppController();
  var MyAppRouter = Marionette.AppRouter.extend({
    controller: controller,
    appRoutes: {
      'save': 'save',
      'section/:id/show': 'scroll',
      'multiaction': 'multiaction'      
    }
  });
  return MyAppRouter;
});
