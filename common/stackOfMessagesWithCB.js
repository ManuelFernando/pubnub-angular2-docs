var myStack1 = PubNub.getMessage('myChannel1', function(msg) {
    console.log(msg);
});
