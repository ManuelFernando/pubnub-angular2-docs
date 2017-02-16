// assuming an initialized PubNub instance already exists
 pubnub.channelGroups.addChannels({
   channels: ['wife'],
   channelGroup: "family"
},
function (status, response) {
});
