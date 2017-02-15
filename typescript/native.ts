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
  channel: 'my_channel'
}, (status, response) => {
  if (status.error) {
    console.log(status);
  } else {
    console.log('message Published w/ timetoken', response.timetoken);
  }
});

anotherInstance.grant({
  channels: ['my_channel'],
  authKeys: ['my_authkey'],
  read: true,
  write: false
}, (status) => {
  console.log(status);
});
