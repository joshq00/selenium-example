var webdriverio = require( 'webdriverio' );

var client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });

client.init()
    .url( 'http://lmgtfy.com' )
    .setValue( '#search-term', 'What is selenium?' )
    .click( '#search' )
    .getTitle().then( title => console.log( `Page title: ${ title }` ) )
    .getValue( '#link input' ).then( link => console.log( `LMGTFY url: ${ link }` ) )
    .end();
