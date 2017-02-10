pubnub.channelGroups.addChannels({
  channels: ['myChannel1', 'myChannel1'],
  channelGroup: "myGroup1"
},
function(status) {
  if (status.error) {
    console.log("operation failed w/ status: ", status);
  } else {
    console.log("operation done!")
  }
});
