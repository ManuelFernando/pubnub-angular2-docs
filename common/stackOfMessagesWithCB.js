var myStack1 = pubnub.getMessage('myChannel1', function(msg) {
    console.log(msg);
});
