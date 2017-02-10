// return 100 messages ending on timetoken
pubnub.history({
  channel: 'myChannel1',
  stringifiedTimeToken: true,
  end: '13406746780720711'
},
function (status, response) {
  // handle status, response
});
