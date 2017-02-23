getMessages({
  channel: 'test1', max: 20, pagesize: 5, reverse: false
},
function(results) {
  console.log("results: \n" + JSON.stringify(results));
});
