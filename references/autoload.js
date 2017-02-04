pubnub.subscribe({
  channels: ['myChannel1'],
  triggerEvents: true,
  withPresence: true,
  autoload: 100
});
