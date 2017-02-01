pubnub.addListener({
  status: function(st) {
    if (st.category === "PNUnknownCategory") {
      var newState = {new: 'error'};
      pubnub.setState({
        state: newState},
        function (status) {
          console.log(st.errorData.message);
        }
      );
    }
  },
  message: function(message) {
    console.log(message);
  }
});

pubnub.subscribe({channels: ['myChannel1']});
