pubnub.grant({
  channel: ["public_chat"],
  ttl: 0, // TTL of 0 is "forever, never expiring"
  read: true,
  write: false,
  manage: false
});
