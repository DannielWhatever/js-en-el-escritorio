var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', app.quit);

app.on('ready', function() {

  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.webContents.on('did-finish-load', function() {

    var streaming = require('./streaming.js');

    streaming.engine.server.on('listening', function () {
      console.log('on listening');
      mainWindow.webContents.send('streaming:ready', streaming.url);
    });

  });

  mainWindow.openDevTools();

});
