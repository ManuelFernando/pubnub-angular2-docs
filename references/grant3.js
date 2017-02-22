pubnub.grant({
  channels: ["public_chat"],
  authKeys: ["authenticateduser"],
  ttl: 0, // TTL of 0 is "forever, never expiring"
  read: true,
  write: true
});
