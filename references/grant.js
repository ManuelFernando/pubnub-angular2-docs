pubnub.grant({
  channels: ['my_channel'],
  authKeys: ['my_rw_authkey'],
  read: true,
  write: true,
  ttl: 5
},
function (status) {
  // handle state setting response
});
