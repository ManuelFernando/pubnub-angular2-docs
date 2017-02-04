pubnub.subscribe({
  channels  : ['myChannel1'],
  withPresence: true,
  triggerEvents: true
});

pubnub.subscribe({
  channels  : ['myChannel2'],
  withPresence: true,
  triggerEvents: ['message', 'presence', 'status']
});
