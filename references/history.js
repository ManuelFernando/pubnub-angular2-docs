pubnub.history({
  channel: 'myChannel1',
  reverse: false, // false is the default
  count: 100, // 100 is the default
  stringifiedTimeToken: true // false is the default
},
function (status, response) {
  // handle status, response
});
