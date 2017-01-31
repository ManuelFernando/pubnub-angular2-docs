var myStack1 = pubnub.getMessage('myChannel1');

var myStack2 = pubnub.getMessage('myGroup1');

var myStack3 = pubnub.getMessage(['myChannel1', 'myGroup1']);
