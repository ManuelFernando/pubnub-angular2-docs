pubnub.getStatus('my_channel1', function(st) {
    console.log(st);
});

pubnub.getStatus('my_channelGroup', function(st) {
    console.log(st);
});

pubnub.getStatus(['my_channel1', 'my_channel2', 'my_channelGroup'], function(st) {
    console.log(st);
});
