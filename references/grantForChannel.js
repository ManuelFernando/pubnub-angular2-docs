// grant world read/write to myChannel1

pubnub.grant({
  channels: ['myChannel1'],
  read: true,
  write: true
},
function (status) {
  // handle state setting response
});
