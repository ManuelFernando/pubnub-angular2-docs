PubNub.getStatus('myChannel', function(st) {
    console.log(st);
});

PubNub.getStatus('myGroup1', function(st) {
    console.log(st);
});

PubNub.getStatus(['myChannel1', 'myChannel2', 'myGroup1'], function(st) {
    console.log(st);
});
