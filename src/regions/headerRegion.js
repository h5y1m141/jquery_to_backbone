define([
  'marionette'
], function (Marionette) {
  var HeaderRegion = Marionette.Region.extend({
    el: '#main-header'
  });
  return HeaderRegion;
});
