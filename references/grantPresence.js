// Allow world read / write access to myChannel1-pnpres

pubnub.grant({
  channels: ['my_channel-pnpres'],
  ttl: 5,
  read: true,
  write: true
},
function (status) {
  // handle state setting response
});
