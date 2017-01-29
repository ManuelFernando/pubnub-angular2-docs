PubNub.subscribe({
    channels  : ['myChannel1', 'myChannel2', 'myChannel3'],
    channelGroups: ['myGroup1', 'myGroup2'],
    withPresence: true,
    triggerEvents: ['message', 'presence', 'status']
});
