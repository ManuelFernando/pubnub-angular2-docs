pubnub.push.listChannels({
  device: 'A655FBA9931AB',
  pushGateway: 'apns' // apns, gcm, mpns
},
function (status, response) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
    return;
  }

  console.log("listing push channel for device");
  response.channels.forEach( function (channel) {
    console.log(channel);
  })
});
