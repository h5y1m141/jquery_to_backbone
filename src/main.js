define([
  'backbone',
  'marionette',
  'TabCollectionView',
  'Router'
], function(Backbone, Marionette, TabCollectionView, Router) {
	var SampleApp = Marionette.Application.extend({
		setLayout: function () {
      var tabCollectionVietw = new TabCollectionView();
      tabCollectionVietw.render();
		}
	});
	var MyApp = new SampleApp();  
	MyApp.on('before:start', function () {
		MyApp.setLayout();
	});
	MyApp.on('start', function () {
    var router = new Router();
    Backbone.history.start();
	});
  MyApp.start();
});

