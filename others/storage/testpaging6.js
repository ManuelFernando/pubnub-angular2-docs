getMessages({
  channel: 'test1', max: 50, pagesize: 5, reverse: false,
  startToken:"14774567814936359"
},
function(results) {
  console.log("results: \n" + JSON.stringify(results));
});
