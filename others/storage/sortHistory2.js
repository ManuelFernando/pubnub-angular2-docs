getMessages({channel: 'test1', max: 100, pagesize: 5, reverse: true},
  function(results) {
    console.log("presorted: \n" + JSON.stringify(results));
  }
);
