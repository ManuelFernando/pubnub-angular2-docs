function pub(channel, total) {
  var i = 1;

  var looper = setInterval(
    function() {
      pubnub.publish({
        channel: channel,
        message: "message #" + i++
      });

      if (i > total) {
        clearInterval(looper);
      }
    },
    400);
}
