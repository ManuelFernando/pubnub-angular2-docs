pubnub.hereNow({
  channels: ["my_channel"],
  channelGroups : ["my_channelGroup"],
  includeUUIDs: true,
  includeState: true
},
function (status, response) {
  console.log(status);
  console.log(response);
});
