pubnub.channelGroups.deleteGroup({
  channelGroup: "my_channelGroup"
},
function (status) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
  } else {
    console.log("operation done!");
  }
});
