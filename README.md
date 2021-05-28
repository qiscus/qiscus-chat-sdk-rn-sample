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
param 'admin' will used for determining user logged-in is admin on group and 'isBroadCast' will used to make group broadcast that only admin can post or not

Screenshot :
1. Create broadcast


![Create brodcast](/screenshot/1.png)

2. Set param only admin can post or not also , add participant

![Create brodcast](/screenshot/2.png)

3. Change broadcast info

![Create brodcast](/screenshot/3.png)

4. Check user not admin enter room broadcast

![Create brodcast](/screenshot/4.png)
