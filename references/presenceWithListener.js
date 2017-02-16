pubnub.addListener({
  presence: function(m) {
    console.log(m);
  },
  message: function(message) {
    console.log(message)
  }
});

pubnub.subscribe({
    channels: ["my_channel"],
    withPresence: true
});
