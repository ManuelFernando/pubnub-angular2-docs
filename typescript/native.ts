declare var PubNub: any;

var defaultInstance = new PubNub({
  publishKey: 'YOUR PUB_KEY',
  subscribeKey: 'YOUR SUB_KEY'
});

var anotherInstance = new PubNub({
  publishKey: 'ANOTHER PUB_KEY',
  subscribeKey: 'ANOTHER SUB_KEY'
});

defaultInstance.publish({
  message: {such: 'Hello!'},
  channel: 'myChannel1'
}, (status, response) => {
  if (status.error) {
    console.log(status);
  } else {
    console.log('message Published w/ timetoken', response.timetoken);
  }
});

anotherInstance.grant({
  channels: ['myChannel1'],
  authKeys: ['myAuthkey'],
  read: true,
  write: false
}, (status) => {
  console.log(status);
});
