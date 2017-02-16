// assuming an initialized Pubnub instance already exists
pubnub.channelGroups.removeChannels({
  channels: ["son"],
  channelGroup: "family"
},
function (status) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
  } else {
    console.log("operation done!")
  }
});
