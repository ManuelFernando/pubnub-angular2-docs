pubnub.push.addChannels({
  channels: ['my_channel'],
  device: 'A655FBA9931AB',
  pushGateway: 'apns' // apns, gcm, mpns
},
function(status) {
  if (status.error) {
    console.log("operation failed w/ error:", status);
  } else {
    console.log("operation done!")
  }
});
