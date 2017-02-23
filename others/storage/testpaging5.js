getMessages({
  channel: 'test1', max: 20, pagesize: 5, reverse: true,
  startToken:"14774567814936359"
},
function(results) {
  console.log("results: \n" + JSON.stringify(results));
});
