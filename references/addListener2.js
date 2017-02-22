pubnub.addListener({
  status: function(statusEvent) {
    if (statusEvent.category === "PNUnknownCategory") {
      var newState = {
        new: 'error'
      };
      pubnub.setState({
        state: newState
      },
      function (status) {
        console.log(statusEvent.errorData.message);
      });
    }
  },
  message: function(message) {
    console.log(message);
  }
});

pubnub.subscribe({
    channelGroups: ["privateChat"]
});
