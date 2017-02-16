pubnub.channelGroups.deleteGroup({
  channelGroup: "family"
},
function (status) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
  } else {
    console.log("operation done!")
  }
});
