requirejs(['userLibrary'], function(userLibrary) {
  $('#userLibrary').on('click', function(){
    var url = 'https://gist.githubusercontent.com/h5y1m141/eb779a25ddf7dafb93ae/raw/a6f80e36f6b5e6ab4fc408660adb2728adb73609/userLibrary.json';
    $.ajax({
      url: url
    }).done(function(data) {
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
