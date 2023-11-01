

function AddRoom({roomList, getRoomList, switchCurrentRoom, token}) {
	async function addRoom() {
		try {
			let res = await fetch('http://127.0.0.1:4000/room/new', {
				headers: new Headers({
					'content-type': 'application/json',
					'Authorization': token
				}),
				method: 'POST',
				body: JSON.stringify({
					title: `Room ${roomList.length + 1}`,
					description: `This is Room ${roomList.length + 1}.`
				})
			});
			let results = await res.json();
			console.log(results);
			let resRoomList = await getRoomList();
			// let resultsRoomList = await resRoomList.json();
			console.log(resRoomList.length - 1);
			console.log(resRoomList[resRoomList.length - 1]);
			switchCurrentRoom(resRoomList[resRoomList.length - 1]);
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<div>
			<button onClick={addRoom}>Add</button>
		</div>
	)
};

export default AddRoom;