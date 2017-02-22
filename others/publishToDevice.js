pubnub.init({
    subscribeKey: 'YOUR SUB_KEY',
    publishKey:   'YOUR PUB_KEY'
});

var pushPayload = {
  "pn_apns": {
    "aps" : {
      "alert": "hi",
      "badge": 2,
      "sound": "melody"
    },
    "c" : "3"
  },
  "pn_gcm": {
    "data" : {
      "a" : "1"
    }
  },
  "b" : "2"
}

pubnub.publish({
  message: pushPayload
},
function (status) {
  // handle publsh status.
});
