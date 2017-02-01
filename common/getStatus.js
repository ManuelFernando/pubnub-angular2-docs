pubnub.getStatus('myChannel1', function(st) {
    console.log(st);
});

pubnub.getStatus('myGroup1', function(st) {
    console.log(st);
});

pubnub.getStatus(['myChannel1', 'myChannel2', 'myGroup1'], function(st) {
    console.log(st);
});
