let httpClient = require('./client/http_client');

httpClient.get('http://irc.lv').then(console.log, console.log);