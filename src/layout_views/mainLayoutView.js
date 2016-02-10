define([
  'marionette'
], function (Marionette) {
  var MainLayoutView = Marionette.LayoutView.extend({
    el: 'mainArea',
    template: "#main-view-template",
    regions: {
      headerRegion: "#main-header",
      contents: "#main-contents"
    }
  });
  return MainLayoutView;
});

