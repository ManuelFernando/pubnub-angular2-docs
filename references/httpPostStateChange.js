HTTP POST
Content-Type: application/json
{
  "action"    : "state-change",
  "subkey"    : <pubnub-subscribe-key>,
  "channel"   : <channel>,
  "timestamp" : <unix-timestamp>,
  "occupancy" : <#-users-in-channel>,
  "data"      : <state-data-associated-with-uuid>
}
