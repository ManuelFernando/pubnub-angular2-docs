// grant world read/write to myChannel1

pubnub.grant({
  channels: ['my_channel'],
  read: true,
  write: true
},
function (status) {
  // handle state setting response
});
