HTTP POST
Content-Type: application/json
{
  "action"    : "join",
  "subkey"    : <pubnub-subscribe-key>,
  "channel"   : <channel>,
  "uuid"      : <uuid>,
  "timestamp" : <unix-timestamp>,
  "occupancy" : <#-users-in-channel>,
  "data"      : <state-data-associated-with-uuid>
}
