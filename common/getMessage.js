pubnub.getMessage('my_channel1', function (msg) {
  console.log(msg);
});

pubnub.getMessage('my_channelGroup', function (msg) {
  console.log(msg);
});

pubnub.getMessage(['my_channel1', 'my_channel2', 'my_channelGroup'], function(msg) {
  console.log(msg.message);
  console.log(msg.channel);
});
