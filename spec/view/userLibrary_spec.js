define([
  'UserLibraryView',
], function(UserLibraryView) {
  describe('view/userLibrary', function() {
    describe('renderメソッドについて', function() {
      beforeEach(function () {
        var fixture = "<div class='dataArea'><ul><script type='text/template' id='userLibraryView'><% _.each(items, function(item){ %><li>ファイル名：<%= item.path %></li><li>説明：<%= item.description %></li><% }); %></script></ul></div>",
            userLibraryView = new UserLibraryView();
        document.body.insertAdjacentHTML('afterbegin', fixture);
        userLibraryView.fetch();
      });
      it('viewの描画される', function() {
        setTimeout("expect($('.dataArea > ul > li:nth-child(1)').text()).toEqual('ファイル名：sample01.png');", 2000);
      });
    });
  });
});  
