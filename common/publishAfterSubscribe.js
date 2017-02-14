pubnub.addListener({
  status: function(st) {
    if (st.category === "PNConnectedCategory") {
      pubnub.publish({
        message: 'Hello from the PubNub Angular2 SDK!',
        channel: 'myChannel1'
      });
    }
  },
  message: function(message) {
    console.log(message);
  }
});

pubnub.subscribe({channels: ['myChannel1']});
