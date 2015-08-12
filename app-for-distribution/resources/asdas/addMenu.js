var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

var template = [
  {
    label: 'Electron',
    submenu: [
      {
        label: 'About Electron',
        click: function(){
          alert('hola :30');
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Services',
        submenu: []
      }
    ]
  }
];
var menu = Menu.buildFromTemplate(template);

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);
