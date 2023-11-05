import { useState, useEffect } from 'react';
import { Button, Input } from 'reactstrap';

function AddRoom({roomList, getRoomList, switchCurrentRoom, token}) {
	let[roomName, setRoomName] = useState('');

	async function addRoom() {
		if(!roomName) return;
		try {
			let res = await fetch('http://127.0.0.1:4000/room/new', {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}),
				method: 'POST',
				body: JSON.stringify({
					title: `${roomName}`,
					description: `${roomName}'s description.`
				})
			});
			let results = await res.json();
			console.log(results);
			let resRoomList = await getRoomList();
			switchCurrentRoom(resRoomList[resRoomList.length - 1]);
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Button onClick={addRoom}>Add</Button>
			<Input type='text' placeholder='Room Name' onChange={(e) => setRoomName(e.target.value)} />
		</div>
	)
};

export default AddRoom;