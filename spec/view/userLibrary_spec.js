define(['userLibraryView'], function(userLibraryView) {
  describe('view/userLibrary', function() {
    describe('renderメソッドについて', function() {
      var items;
      beforeEach(function () {
        items = [
          {
            'path': 'sample01.png',
            'description': 'これはメイン画像用のPNGファイルです'
          },
          {
            'path': 'sample02.png',
            'description': 'これはアイコン用画像です'
          }
        ];
      });
      it('viewの描画される', function() {
        var fixture = "<div class='dataArea'></div>";
        document.body.insertAdjacentHTML('afterbegin', fixture);
        userLibraryView.render(items);        
        expect($('.dataArea > ul > li:nth-child(1)').text()).toEqual('ファイル名：sample01.png');
      });      
    });
  });
});  
