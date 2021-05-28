## Feature Broadcast
This branch will show how group can possible have feature like broadcast.
https://documentation.qiscus.com/chat-sdk-javascript/chat-room#create-group-chat-room-with-metadata
for example :
```jsx
Qiscus.qiscus
			.createGroupRoom(userIds, name, {
				avatarURL: avatarUrl,
				isBroadCast: isBroadCastGroup ? 'broadcast' : 'not-broadcast',
				admin: adminGroup,
			})
```


