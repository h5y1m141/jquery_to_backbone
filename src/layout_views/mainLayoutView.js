define([
  'marionette'
], function (Marionette) {
  var MainLayoutView = Marionette.LayoutView.extend({
    template: "#main-view-template",
    regions: {
      header: "#main-header",
      contents: "#main-contents"
    }
  });
  return MainLayoutView;
});

