// assuming an initialized PubNub instance already exists
 pubnub.channelGroups.addChannels({
   channels: ["son", "daughter"],
   channelGroup: "family"
},
function (status, response) {
});
