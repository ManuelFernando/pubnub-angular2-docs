pubnub.getPresence('my_channel', function(pse) {
    console.log(pse);
});

pubnub.getPresence('my_channelGroup', function(pse) {
    console.log(pse);
});

pubnub.getPresence(['my_channel1', 'my_channel2', 'my_channelGroup'], function(pse) {
    console.log(pse);
    console.log(pse.subscribedChannel);
});
