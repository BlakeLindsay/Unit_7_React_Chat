import { Button } from 'reactstrap';

function Delete({roomList, getRoomList, currentRoom, switchCurrentRoom, token}) {
	async function deleteRoom() {
		try {
			let res = await fetch(`http://127.0.0.1:4000/room/${currentRoom._id}`, {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}),
				method: 'DELETE'
			});
			let results = await res.json();
			console.log(results);
			let resRoomList = await getRoomList();
			switchCurrentRoom(resRoomList[0]);
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Button color="danger" onClick={deleteRoom}>Delete</Button>
		</div>
	)
};

export default Delete;