var myStack1 = pubnub.getMessage('my_channel');

var myStack2 = pubnub.getMessage('my_channelGroup');

var myStack3 = pubnub.getMessage(['my_channel', 'my_channelGroup']);
