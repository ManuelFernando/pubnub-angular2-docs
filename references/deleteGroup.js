pubnub.channelGroups.deleteGroup({
  channelGroup: "myGroup1"
},
function (status) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
  } else {
    console.log("operation done!");
  }
});
