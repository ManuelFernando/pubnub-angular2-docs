// assuming an intialized Pubnub instance already exists
pubnub.channelGroups.listChannels({
  channelGroup: "myGroup1"
},
function (status, response) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
    return;
  }
  console.log("listing push channel for device")
  response.channels.forEach( function (channel) {
    console.log(channel);
  });
});
