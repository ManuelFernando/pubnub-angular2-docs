this.messages = pubnub.getMessage('my_channel', function(msg) {
  console.log(msg);
});
