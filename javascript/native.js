var defaultInstance = new PubNub(
  {
    publishKey: 'YOUR PUB_KEY',
    subscribeKey: 'YOUR SUB_KEY'
  }
);

var anotherInstance = new PubNub(
  {
    publishKey: 'ANOTHER PUB_KEY',
    subscribeKey: 'ANOTHER SUB_KEY'
  }
);

defaultInstance.publish(
  {
    message: {such: 'Hello!'},
    channel: 'myChannel1'
  },
  function (status, response) {
    if (status.error) {
      console.log(status);
    } else {
      console.log("message Published w/ timetoken", response.timetoken);
    }
  }
);

anotherInstance.grant(
  {
    channels: ['myChannel1'],
    authKeys: ['myAuthkey'],
    read: true,
    write: false
  },
  function (status) {
    console.log(status);
  }
);
