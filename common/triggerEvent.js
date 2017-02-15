pubnub.subscribe({
    channels  : ['my_channel1', 'my_channel2', 'my_channel3'],
    channelGroups: ['my_channelGroup1', 'my_channelGroup2'],
    withPresence: true,
    triggerEvents: ['message', 'presence', 'status']
});
