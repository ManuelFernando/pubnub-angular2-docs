// get last 3 messages published to my_channel
pubnub.history({
  channel: ['my_channel'],
  reverse: true, // Setting to true will traverse the time line in reverse starting with the oldest message first.
  count: 3,
  stringifiedTimeToken: true // false is the default
},
function (status, response) {
  // handle status, response
});
