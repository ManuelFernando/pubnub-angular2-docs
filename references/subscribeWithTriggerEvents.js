pubnub.subscribe({
  channels  : ['my_channel1'],
  withPresence: true,
  triggerEvents: true
});

pubnub.subscribe({
  channels  : ['my_channel2'],
  withPresence: true,
  triggerEvents: ['message', 'presence', 'status']
});
