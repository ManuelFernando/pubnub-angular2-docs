pubnub.init({
  subscribeKey: 'YOUR SUB_KEY',
  publishKey: 'YOUR PUB_KEY',
  secretKey: "secretKey",
  cipherKey: "myCipherKey",
  authKey: "myAuthKey",
  logVerbosity: true,
  uuid: "Stephen",
  ssl: true,
  presenceTimeout: 120,
  heartbeatInterval: 30
});
