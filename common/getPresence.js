PubNub.getPresence('myChannel', function(pse) {
    console.log(pse);
});

PubNub.getPresence('myGroup1', function(pse) {
    console.log(pse);
});

PubNub.getPresence(['myChannel1', 'myChannel2', 'myGroup1'], function(pse) {
    console.log(pse);
    console.log(pse.subscribedChannel);
});
