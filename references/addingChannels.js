pubnub.channelGroups.addChannels({
  channels: ['my_channel1', 'my_channel2'],
  channelGroup: "my_channelGroup"
},
function(status) {
  if (status.error) {
    console.log("operation failed w/ status: ", status);
  } else {
    console.log("operation done!");
  }
});
