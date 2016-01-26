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
    userLibrary: 'src/userLibrary',
    userLibraryModel: 'src/model/userLibrary',
    userLibraryView: 'src/view/userLibrary'    
  },
  shim: {
  },
  deps: tests,
  callback: window.__karma__.start
});
