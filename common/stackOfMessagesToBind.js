this.messages = pubnub.getMessage('myChannel1', function(msg) {
  console.log(msg);
});
