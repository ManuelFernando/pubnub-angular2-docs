pubnub.subscribe({
  channels: ['my_channel'],
  triggerEvents: true,
  withPresence: true,
  autoload: 100
});

var messages = pubnub.getMessage('my_channel', function(message){
  if (!message) {
    // The history has been loaded.
    console.log(messages);
  } else {
    // It has been received a realtime message.
    console.log(message);
  }
});
