pubnub.channelGroups.removeChannels({
  channels: ["my_channel2"],
  channelGroup: "my_channelGroup"
},
function (status) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
  } else {
    console.log("operation done!");
  }
});
