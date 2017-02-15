var result = pubnub.publish({
  message: {such: 'Hello from the PubNub Angular2 SDK!'},
  channel: 'my_channel'
});

result.then(function (response) {
  console.log(response);
}).catch(function (err) {
  console.log(err);
});
