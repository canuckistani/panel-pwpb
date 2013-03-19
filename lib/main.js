var data = require('self').data;

var panel = require('panel').Panel({
    contentURL: data.url('panel.html'),
    height: 400,
    width: 400
});

require("widget").Widget({
    id: 'My-Panel',
    label: 'My Panel',
    contentURL: 'http://www.mozilla.org/favicon.ico',
    panel: panel
});

// "permissions": {"private-browsing": true}