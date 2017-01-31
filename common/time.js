pubnub.time(function(status, response) {
  if (status.error) {
    console.log(status.error);
  } else {
    console.log(response.timetoken);
  }
});
