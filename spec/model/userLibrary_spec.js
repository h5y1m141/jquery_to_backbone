define(['userLibraryModel'], function(userLibraryModel) {
  describe('model/userLibrary', function() {
    describe('fetchメソッドについて', function() {
      beforeEach(function () {
        spyOn(userLibraryModel, 'fetch').and.callFake(function(){
          var deferred = $.Deferred();
          var dummy = [
            {
              'path': 'sample01.png',
              'description': 'これはメイン画像用のPNGファイルです'
            },
            {
              'path': 'sample02.png',
              'description': 'これはアイコン用画像です'
            }
          ];
          deferred.resolve(JSON.stringify(dummy));
          return deferred.promise();
        });
      });
      it('JSONの値が取得できる', function() {
        var items,
            promise;
        promise = userLibraryModel.fetch();
        promise.done(function(data){
          items = JSON.parse(data);
        });
        expect(items[0].path).toEqual('sample01.png');
      });
    });
  });
});
