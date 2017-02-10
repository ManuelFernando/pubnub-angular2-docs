// get messages starting at timetoken order oldest first
pubnub.history({
  channel: 'myChannel1',
  reverse: true, // Setting to true will traverse the time line in reverse starting with the oldest message first.
  stringifiedTimeToken: true, // false is the default
  start: '13406746780720711'
},
function (status, response) {
  // handle status, response
});
