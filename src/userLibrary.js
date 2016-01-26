requirejs([
  'userLibraryModel'
], function(userLibraryModel) {
  $('#userLibrary').on('click', function(){
    var promise;
    promise = userLibraryModel.fetch();
    promise.done(function(data) {
      var items = JSON.parse(data),
          result = [];
      _.each(items, function(item){
        var element;
        element = '<li>ファイル名：' + item.path + '</li>' +
          '<li>説明：' + item.description + '</li>';
        result.push(element);
      });
      $('.dataArea').append('<ul>' + result + '</ul>');
    });
  });
});
