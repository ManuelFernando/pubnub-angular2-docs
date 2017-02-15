pubnub.addListener({
  status: function(st) {
    if (st.category === "PNConnectedCategory") {
      pubnub.publish({
        message: 'Hello from the PubNub Angular2 SDK!',
        channel: 'my_channel'
      });
    }
  },
  message: function(message) {
    console.log(message);
  }
});

pubnub.subscribe({channels: ['my_channel']});
