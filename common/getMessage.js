pubnub.getMessage('myChannel1', function (msg) {
    console.log(msg);
});

pubnub.getMessage('myGroup1', function (msg) {
    console.log(msg);
});

pubnub.getMessage(['myChannel1', 'myChannel2', 'myGroup1'], function(msg) {
    console.log(msg.message);
    console.log(msg.channel);
});
