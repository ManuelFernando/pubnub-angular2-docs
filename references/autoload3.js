pubnub.subscribe({
  channels: ['myChannel1'],
  triggerEvents: true,
  withPresence: true,
  autoload: 100
});

var messages = pubnub.getMessage('myChannel1', function(message){
  if (!message) {
    // The history has been loaded.
    console.log(messages);
  } else {
    // It has been received a realtime message.
    console.log(message);
  }
});
