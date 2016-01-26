define([
  'underscore',
  'jquery'
], function(_, $) {
  var render = function(items){
    var result = [],
        $dataArea;
    $dataArea = $('.dataArea');
    _.each(items, function(item){
      var element;
      element = '<li>ファイル名：' + item.path + '</li>' +
        '<li>説明：' + item.description + '</li>';
      result.push(element);
    });
    return $dataArea.append('<ul>' + result + '</ul>');    
  };
  return {
    render: render
  };
});
