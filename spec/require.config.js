var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  baseUrl: "/base",
  paths: {
    jquery: 'node_modules/jquery/dist/jquery',
    underscore: 'node_modules/underscore/underscore',
    backbone: 'node_modules/backbone/backbone',    
    userLibrary: 'src/userLibrary',
    UserLibraryView: 'src/view/userLibrary',
    UserLibraryModel: 'src/model/userLibrary',
    UserLibraryCollection: 'src/collection/userLibrary'    
  },
  shim: {
  },
  deps: tests,
  callback: window.__karma__.start
});
