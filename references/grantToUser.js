// allow user read only access to myChannel1

pubnub.grant({
  channels: ['my_channel'],
  authKeys: ['my_ro_authkey'],
  ttl: 5,
  read: true,
  write: false
},
function (status) {
  // handle state setting response
});
