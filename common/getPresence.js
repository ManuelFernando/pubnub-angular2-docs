pubnub.getPresence('myChannel1', function(pse) {
    console.log(pse);
});

pubnub.getPresence('myGroup1', function(pse) {
    console.log(pse);
});

pubnub.getPresence(['myChannel1', 'myChannel2', 'myGroup1'], function(pse) {
    console.log(pse);
    console.log(pse.subscribedChannel);
});
