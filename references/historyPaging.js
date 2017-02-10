getAllMessages = function(timetoken) {
  pubnub.history({
    channel: 'history_test',
    stringifiedTimeToken: true, // false is the default
    start: timetoken
  },
  function (status, response) {
    var msgs = response.messages;
    var start = response.startTimeToken;
    var end = response.endTimeToken;
    // if msgs were retrieved, do something useful with them
    if (msgs !== undefined && msgs.length > 0) {
      console.log(msgs.length);
      console.log("start : " + start);
      console.log("end : " + end);
    }
    // if 100 msgs were retrieved, there might be more; call history again
    if (msgs.length == 100) {
      getAllMessages(start);
    }
  });
}
  
//Usage examples:
//getAllMessages();
//getAllMessages(null);
//getAllMessages(14264873967138188);
