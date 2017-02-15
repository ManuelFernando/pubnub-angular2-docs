pubnub.subscribe({
  channels: ['my_channel'],
  triggerEvents: true,
  withPresence: true,
  autoload: 100
});

var messages = pubnub.getMessage('my_channel', function(){
  console.log(messages);
});
