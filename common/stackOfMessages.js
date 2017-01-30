var myStack1 = PubNub.getMessage('myChannel1');

var myStack2 = PubNub.getMessage('myGroup1');

var myStack3 = PubNub.getMessage(['myChannel1', 'myGroup1']);
