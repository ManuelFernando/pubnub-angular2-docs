pubnub.push.removeChannels({
  channels: ['myChannel1'],
  device: 'A655FBA9931AB',
  pushGateway: 'apns' // apns, gcm, mpns
},
function(status) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
  } else {
    console.log("operation done!");
  }
});
