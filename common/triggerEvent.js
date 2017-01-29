PubNub.subscribe({
  channels: ['channel_1'],
  channelGroups: ['channelGroup_1']
  withPresence: true,
  triggerEvents: ['message', 'presence', 'status']
});
