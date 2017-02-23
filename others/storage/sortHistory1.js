function sortHistory(messages, desc, callback) {
  messages.sort(function(a, b) {
    var e1 = desc ? b : a;
    var e2 = desc ? a : b;
    return parseInt(e1.timetoken) - parseInt(e2.timetoken);
  });

  callback(messages);
}
