function pub() {
  for (var i = 0; i < 500; i++) {
    // publish 500 messages...
    pubnub.publish({
      channel : 'history_channel',
      message : "message : " + i
    });
  }
}

pubnub.init({
  /* initiation arguments */
})

pubnub.addListener({
  status: function(statusEvent) {
    if (statusEvent.category === "PNConnectedCategory") {
      pub();
    }
  },
  message: function(message) {
    // handle message
  }
});

pubnub.subscribe({
  channels: ['history_channel']
});
