pubnub.channelGroups.removeChannels({
  channels: ["myChannel2"],
  channelGroup: "myGroup1"
},
function (status) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
  } else {
    console.log("operation done!");
  }
});
