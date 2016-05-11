define([
  'backbone',
  'marionette',
  'TabCollectionView',
  'Router'
], function(Backbone, Marionette, TabCollectionView, Router) {
	var SampleApp = Marionette.Application.extend({
		setRootLayout: function () {
      this.root = TabCollectionView;
		}
	});
	var MyApp = new SampleApp();  
	MyApp.on('before:start', function () {
		MyApp.setRootLayout();
	});
	MyApp.on('start', function () {
    var router = new Router();
    Backbone.history.start();
	});
  MyApp.start();
});

