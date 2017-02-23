getMessages({channel: 'test1', max: 100, pagesize: 5, reverse: false},
  function(results) {
    console.log("before sort: \n" + JSON.stringify(results));

    // sort messages in descending order
    sortHistory(results, true, function(sorted) {
      console.log("after sort: \n" + JSON.stringify(sorted));
    });
  }
);
