pubnub.grant({
  channels: ['myChannel1'],
  authKeys: ['my_rw_authkey'],
  read: true,
  write: true,
  ttl: 5
},
function (status) {
  // handle state setting response
});
