define([
  'jquery',
  'marionette',
  'backbone'
], function($, Marionette, Backbone) {
  var AccountInformationLayoutView = Marionette.Layout.extend({
    template: '#accountInformationTemplate',
    regions: {
      accountInformation: '[data-region=quizData]'
    }
  });
  return AccountInformationLayoutView;
});
