var webdriverio = require('webdriverio');
var options = Object.assign( {}, require( './config.json' ), {
    port: 4000,
    desiredCapabilities: { browserName: 'chrome' }
});
console.log( options );
var client = webdriverio.remote(options);

client
.init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
            console.log('Title is: ' + title);
            // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
            })
.end().then(function() {
        process.exit();
        });
