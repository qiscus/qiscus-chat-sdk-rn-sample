## Feature Broadcast
This branch will show how group can possible have feature like broadcast by utilizing the option parameter as described in the following doc
https://documentation.qiscus.com/chat-sdk-javascript/chat-room#create-group-chat-room-with-metadata

for example :

```jsx
Qiscus.qiscus.createGroupRoom(name, userIds, {
				isBroadCast: isBroadCast,
				admin: adminGroup,
			})
```
notes :
param 'admin' will used for determining user logged in is admin on group or not and 'isBroadCast' will used make group to broadcast that only admin can post or not

Screenshot :
1. Create broadcast
![Create brodcast](/screenshot/1.png)
