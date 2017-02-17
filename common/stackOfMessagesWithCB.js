var myStack1 = pubnub.getMessage('my_channel', function(msg) {
  console.log(msg);
});
