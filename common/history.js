pubnub.history({
  channel: 'my_channel',
  reverse: false, // false is the default
  count: 100, // 100 is the default
  stringifiedTimeToken: true // false is the default
},
function (status, response) {
  console.log(response);
});
