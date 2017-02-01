pubnub.hereNow({
  channels: ["myChannel1"],
  channelGroups : ["myGroup1"],
  includeUUIDs: true,
  includeState: true
},
function (status, response) {
  console.log(status);
  console.log(response);
});
