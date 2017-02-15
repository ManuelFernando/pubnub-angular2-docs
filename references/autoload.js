pubnub.subscribe({
  channels: ['my_channel'],
  triggerEvents: true,
  withPresence: true,
  autoload: 100
});
