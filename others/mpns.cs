//Sample code snippet :
string microsoftChannelName = "pushSampleChannel";
HttpNotificationChannel microsoftPushChannel = HttpNotificationChannel.Find(microsoftChannelName);
if (microsoftPushChannel == null){
    if (!string.IsNullOrEmpty(pubnub.PushServiceName)){
        microsoftPushChannel = new HttpNotificationChannel(microsoftChannelName, pubnub.PushServiceName);
    }
    else{
        microsoftPushChannel = new HttpNotificationChannel(microsoftChannelName);
    }

    // Register for all the events before attempting to open the channel.
    .....
    .....

    microsoftPushChannel.Open();
 
}
