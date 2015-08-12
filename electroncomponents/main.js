var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;
app.on('window-all-closed', function() {
    app.quit();
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  /*var dialog = require('dialog');
  var files = dialog.showOpenDialog({ properties: [ 'openFile' ]});
  require('fs').readFile(files[0],'utf-8',function(err,data){
    console.log(data);
    //shell.showItemInFolder(files[0]);
  });*/

  //tray icon and clipboard
  /*var clipboard = require('clipboard');
  var Tray = require('tray');
  var image = clipboard.readImage();
  console.log(image);
  var trayIcon = new Tray(image);
  trayIcon.setContextMenu(menu);*/
});
